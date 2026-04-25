'use client'

import { useState } from 'react'
import { SectionHeading } from './section-heading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Field, FieldGroup, FieldLabel, FieldError } from '@/components/ui/field'
import { Spinner } from '@/components/ui/spinner'
import { toast } from 'sonner'
import { Send } from 'lucide-react'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!form.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!form.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Open Webmail in a new tab intelligently based on the email domain
      const emailTo = 'anushkalakmal0607@gmail.com'
      const defaultSubject = `Portfolio Contact from ${form.name}`
      const subject = encodeURIComponent(form.subject || defaultSubject)
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      )

      const userEmail = form.email.toLowerCase()
      let webmailUrl = ''

      if (userEmail.includes('@outlook.') || userEmail.includes('@hotmail.') || userEmail.includes('@live.')) {
        webmailUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${emailTo}&subject=${subject}&body=${body}`
      } else if (userEmail.includes('@yahoo.')) {
        webmailUrl = `https://compose.mail.yahoo.com/?to=${emailTo}&subject=${subject}&body=${body}`
      } else {
        // Default to Gmail
        webmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&su=${subject}&body=${body}`
      }

      // Open the composed email in a new tab
      window.open(webmailUrl, '_blank')

      toast.success('Opening your webmail to send the message!')
      setForm({ name: '', email: '', subject: '', message: '' })
      setErrors({})
    } catch (error) {
      toast.error('Failed to process message')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading title="Contact Me" />

        <p className="text-muted-foreground mb-8 leading-relaxed text-base max-w-lg mx-auto">
          Whether you have a project in mind, an opportunity to discuss or just want to connect my inbox is always open. 
          <br /> <br />
          <span className="text-primary font-medium">Let&apos;s build something amazing together !</span>
        </p>
        <br />

        <form onSubmit={handleSubmit} className="text-left">
          <FieldGroup>
            <div className="grid md:grid-cols-2 gap-6">
              <Field data-invalid={!!errors.name}>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <FieldError>{errors.name}</FieldError>}
              </Field>

              <Field data-invalid={!!errors.email}>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <FieldError>{errors.email}</FieldError>}
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="subject">Subject (Optional)</FieldLabel>
              <Input
                id="subject"
                name="subject"
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </Field>

            <Field data-invalid={!!errors.message}>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={6}
                value={form.message}
                onChange={handleChange}
                disabled={isSubmitting}
                aria-invalid={!!errors.message}
              />
              {errors.message && <FieldError>{errors.message}</FieldError>}
            </Field>

            <Button
              type="submit"
              size="lg"
              className="w-full md:w-auto transition-all duration-300 border border-primary hover:bg-transparent hover:text-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Spinner className="size-4" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="size-4" />
                  Send Message
                </>
              )}
            </Button>
          </FieldGroup>
        </form>
      </div>
    </section>
  )
}
