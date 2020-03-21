import React from 'react'
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  withFormik,
} from 'formik'
import * as Yup from 'yup'
import Airtable from 'airtable'

interface FormValues {
  name: string
  age: number
  phone: string
  email: string
  purpose: string
}

interface MyFormProps {
  initialName?: string
  initialAge?: number
  initialPhone?: string
  initialEmail?: string
  initialPurpose?: string
  onSubmit: (values: {
    name: string
    age: number
    phone: string
    email: string
    purpose: string
  }) => Promise<boolean>
}

interface Err {
  isError: boolean
  message: string
}
const InnerForm = (props: FormikProps<FormValues>) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props

  const nameErr = !!(errors.name && touched.name)
  const phoneErr = !!(errors.phone && touched.phone)
  const emailErr = !!(errors.email && touched.email)
  console.log(errors)
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-3 md:mb-6">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
          >
            Họ tên
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="name"
            type="text"
            placeholder="Nguyễn Thành Công"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {nameErr && (
            <p className="text-red-500 text-xs italic">{errors.name}</p>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="age"
          >
            Tuổi
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="age"
            type="number"
            placeholder="Tuổi"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.age}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-3 md:mb-6">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="phone"
          >
            Số điện thoại
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="phone"
            type="text"
            placeholder="Số điện thoại"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
          />
          {phoneErr && (
            <p className="text-red-500 text-xs italic">{errors.phone}</p>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            placeholder="thanhcong@gmail.com"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {emailErr && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-3 md:mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="purpose"
          >
            Yêu cầu tư vấn
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="purpose"
            placeholder="Nhu cầu cần tư vấn"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.purpose}
          ></textarea>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-3 md:mb-6">
        <div className="w-full px-3 md:mb-6 md:mb-0 text-center">
          <button
            className="bg-secondary text-white font-semibold py-2 px-4 md:py-2 md:px-8 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Gởi yêu cầu
          </button>
        </div>
      </div>
    </form>
  )
}

const EditForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => ({
    email: props.initialEmail || '',
    age: props.initialAge || 25,
    name: props.initialName || '',
    phone: props.initialPhone || '',
    purpose: props.initialPurpose || '',
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email không hợp lệ'),
    age: Yup.number(),
    name: Yup.string().required('Vui lòng cho chúng tôi biết tên của anh chị'),
    phone: Yup.string()
      .required('Vui lòng điền số điện thoại của anh chị')
      .matches(
        /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
        'Số điện thoại không hợp lệ'
      ),
    purpose: Yup.string(),
  }),

  handleSubmit(
    { email, name, age, phone, purpose }: FormValues,
    { props: formProps, setSubmitting, setErrors, resetForm }
  ) {
    formProps.onSubmit({ name, age, email, phone, purpose }).then(data => {
      if (data) {
        resetForm()
      }
    })
  },
})(InnerForm)
export default EditForm
