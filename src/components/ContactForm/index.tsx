import React from 'react'
import EditForm from './EditForm'
import Airtable from 'airtable'

interface Props {
  onClose?: () => void
}
const ContactForm = ({ onClose }: Props) => {
  return (
    <div className="fixed top-0 left-0 right-0 left-0 bottom-0 z-50 overflow-auto ">
      <div className="pt-10 sm:pt-24 m-auto relative w-5/6">
        <div className="relative bg-white rounded-md border">
          <div
            onClick={() => {
              if (onClose) {
                onClose()
              }
            }}
            className="absolute top-0 right-0 px-4 py-3"
          >
            <svg
              className="fill-current h-6 w-6 text-secondary"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </div>
          <div className="py-10 px-8">
            <EditForm
              onSubmit={async values => {
                const base = new Airtable({
                  allowUnauthorizedSsl: true,
                  apiKey: 'key8Uc0fwTmIRZwuH',
                }).base('appzMGo8H2QhltKQt')

                const today = new Date()
                try {
                  await base('Table 1').create([
                    {
                      fields: {
                        name: values.name,
                        phone: values.phone,
                        age: values.age,
                        purpose: values.purpose,
                        email: values.email,
                        createdAt: today.toUTCString(),
                      },
                    },
                  ])
                  if (onClose) {
                    onClose()
                  }
                  return true
                } catch (err) {
                  return false
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
