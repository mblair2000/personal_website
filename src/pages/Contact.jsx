import { useState } from 'react'
import toast from 'react-hot-toast'
import SEO from '@/components/utility/SEO'
import { useForm } from '@/hooks/useForm'

// ← Replace with your Formspree endpoint: https://formspree.io/
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'

function validate(values) {
  const errors = {}
  if (!values.name.trim())                errors.name    = 'Name is required.'
  if (!values.email.trim())               errors.email   = 'Email is required.'
  else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Enter a valid email address.'
  if (!values.message.trim())             errors.message = 'Message is required.'
  else if (values.message.trim().length < 20) errors.message = 'Please write at least 20 characters.'
  return errors
}

function Field({ label, error, touched, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-surface-700 mb-1.5">{label}</label>
      {children}
      {touched && error && (
        <p className="mt-1.5 text-xs text-red-500">{error}</p>
      )}
    </div>
  )
}

const inputClass = (error, touched) =>
  `w-full px-4 py-3 rounded-lg border text-sm transition-colors
   focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-brand-400
   ${touched && error
     ? 'border-red-300 bg-red-50'
     : 'border-surface-200 bg-white hover:border-surface-300'
   }`

export default function Contact() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted,  setSubmitted]  = useState(false)

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, reset } =
    useForm({ name: '', email: '', subject: '', message: '' }, validate)

  const onSubmit = async (vals) => {
    setSubmitting(true)
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(vals),
      })
      if (res.ok) {
        setSubmitted(true)
        toast.success('Message sent! I\'ll be in touch soon.')
        reset()
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } catch {
      toast.error('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'mblair2000@gmail.com',
      href:  'mailto:mblair2000@gmail.com',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Location',
      value: 'Arlington, VA',
    },
  ]

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch — I'm open to freelance projects, full-time roles, and interesting conversations."
        url="https://blair0.com/contact"
      />

      <section className="pt-32 pb-24 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-mono text-brand-500 uppercase tracking-widest mb-2">Contact</p>
          <h1 className="section-heading">Let's Talk</h1>
          <p className="section-sub">
            Have a project in mind, a question, or just want to say hi? Send me a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info sidebar */}
          <div className="lg:col-span-2 space-y-8">
            {contactInfo.map(({ icon, label, value, href }) => (
              <div key={label} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-mono text-surface-400 uppercase tracking-wide mb-0.5">{label}</p>
                  {href
                    ? <a href={href} className="text-surface-800 hover:text-brand-600 transition-colors font-medium">{value}</a>
                    : <p className="text-surface-800 font-medium">{value}</p>
                  }
                </div>
              </div>
            ))}

            <div className="card p-5 bg-brand-50 border-brand-100">
              <p className="text-sm text-brand-800 leading-relaxed">
                <span className="font-semibold">Currently available</span> for freelance projects and volunteering engineering groups.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="card p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-display text-2xl font-bold text-surface-900 mb-2">Message Sent!</h2>
                <p className="text-surface-600 mb-6">Thanks for reaching out. I'll get back to you within 1–2 business days.</p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="card p-6 sm:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Your Name" error={errors.name} touched={touched.name}>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Jane Smith"
                      className={inputClass(errors.name, touched.name)}
                      autoComplete="name"
                    />
                  </Field>

                  <Field label="Email Address" error={errors.email} touched={touched.email}>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="jane@example.com"
                      className={inputClass(errors.email, touched.email)}
                      autoComplete="email"
                    />
                  </Field>
                </div>

                <Field label="Subject (optional)">
                  <input
                    type="text"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry, collaboration, etc."
                    className={inputClass(false, false)}
                  />
                </Field>

                <Field label="Message" error={errors.message} touched={touched.message}>
                  <textarea
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={5}
                    placeholder="Tell me about your project or what you have in mind..."
                    className={`${inputClass(errors.message, touched.message)} resize-y min-h-[120px]`}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-surface-400">
                  Your information is never shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
