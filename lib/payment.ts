// Mongolian Payment Gateway Integration
// Supports QPay, Khan Bank, and SocialPay

export interface PaymentConfig {
  qpay: {
    username: string
    password: string
    invoiceCode: string
    callbackUrl: string
  }
  khanbank: {
    merchantId: string
    terminalId: string
    secretKey: string
  }
}

export interface CreateInvoiceParams {
  amount: number
  description: string
  orderId: string
  callbackUrl: string
}

export interface PaymentResult {
  success: boolean
  invoiceId?: string
  qrCode?: string
  deepLinks?: {
    name: string
    logo: string
    link: string
  }[]
  error?: string
}

// QPay Integration
export class QPayService {
  private baseUrl = "https://merchant.qpay.mn/v2"
  private token: string | null = null
  private tokenExpiry: Date | null = null

  constructor(
    private username: string,
    private password: string,
    private invoiceCode: string,
  ) {}

  private async getToken(): Promise<string> {
    if (this.token && this.tokenExpiry && this.tokenExpiry > new Date()) {
      return this.token
    }

    const response = await fetch(`${this.baseUrl}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${this.username}:${this.password}`).toString("base64")}`,
      },
    })

    if (!response.ok) {
      throw new Error("QPay authentication failed")
    }

    const data = await response.json()
    this.token = data.access_token
    this.tokenExpiry = new Date(Date.now() + data.expires_in * 1000)
    return this.token
  }

  async createInvoice(params: CreateInvoiceParams): Promise<PaymentResult> {
    try {
      const token = await this.getToken()

      const response = await fetch(`${this.baseUrl}/invoice`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          invoice_code: this.invoiceCode,
          sender_invoice_no: params.orderId,
          invoice_receiver_code: "terminal",
          invoice_description: params.description,
          amount: params.amount,
          callback_url: params.callbackUrl,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        return { success: false, error: error.message || "Invoice creation failed" }
      }

      const data = await response.json()

      return {
        success: true,
        invoiceId: data.invoice_id,
        qrCode: data.qr_image,
        deepLinks: data.urls?.map((url: { name: string; logo: string; link: string }) => ({
          name: url.name,
          logo: url.logo,
          link: url.link,
        })),
      }
    } catch (error) {
      console.error("QPay error:", error)
      return { success: false, error: "QPay service unavailable" }
    }
  }

  async checkPayment(invoiceId: string): Promise<{ paid: boolean; transactionId?: string }> {
    try {
      const token = await this.getToken()

      const response = await fetch(`${this.baseUrl}/payment/check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          object_type: "INVOICE",
          object_id: invoiceId,
        }),
      })

      if (!response.ok) {
        return { paid: false }
      }

      const data = await response.json()
      const payment = data.rows?.[0]

      return {
        paid: data.count > 0 && payment?.payment_status === "PAID",
        transactionId: payment?.payment_id,
      }
    } catch (error) {
      console.error("QPay check error:", error)
      return { paid: false }
    }
  }
}

// Khan Bank Integration (Simplified - would need actual API integration)
export class KhanBankService {
  constructor(
    private merchantId: string,
    private terminalId: string,
    private secretKey: string,
  ) {}

  async createPaymentLink(params: CreateInvoiceParams): Promise<PaymentResult> {
    // In production, this would integrate with Khan Bank's actual API
    // For demo purposes, we generate a mock payment link

    const paymentId = `KB${Date.now()}`

    return {
      success: true,
      invoiceId: paymentId,
      deepLinks: [
        {
          name: "Khan Bank",
          logo: "/banks/khanbank.png",
          link: `khanbank://pay?amount=${params.amount}&merchant=${this.merchantId}&ref=${params.orderId}`,
        },
      ],
    }
  }

  async verifyPayment(paymentId: string): Promise<{ paid: boolean; transactionId?: string }> {
    // Mock verification - would call Khan Bank API in production
    return { paid: false }
  }
}

// SocialPay Integration
export class SocialPayService {
  private baseUrl = "https://api.socialpay.mn"

  constructor(private terminalId: string) {}

  async createInvoice(params: CreateInvoiceParams): Promise<PaymentResult> {
    // Mock implementation
    return {
      success: true,
      invoiceId: `SP${Date.now()}`,
      deepLinks: [
        {
          name: "SocialPay",
          logo: "/banks/socialpay.png",
          link: `socialpay://payment?amount=${params.amount}&terminal=${this.terminalId}`,
        },
      ],
    }
  }
}

// Factory function to get payment service
export function getPaymentService(method: "qpay" | "khanbank" | "socialpay") {
  switch (method) {
    case "qpay":
      return new QPayService(
        process.env.QPAY_USERNAME || "",
        process.env.QPAY_PASSWORD || "",
        process.env.QPAY_INVOICE_CODE || "",
      )
    case "khanbank":
      return new KhanBankService(
        process.env.KHANBANK_MERCHANT_ID || "",
        process.env.KHANBANK_TERMINAL_ID || "",
        process.env.KHANBANK_SECRET_KEY || "",
      )
    case "socialpay":
      return new SocialPayService(process.env.SOCIALPAY_TERMINAL_ID || "")
    default:
      throw new Error(`Unknown payment method: ${method}`)
  }
}
