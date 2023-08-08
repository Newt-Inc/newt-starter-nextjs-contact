'use client'
import { useRouter } from 'next/navigation'
import styles from '@/styles/Home.module.css'
import type { FormEvent } from 'react'

export default function Page() {
  const router = useRouter()

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const target = event.target as typeof event.target & {
      name: { value: string }
      email: { value: string }
      message: { value: string }
    }
    const data = {
      name: target.name.value,
      email: target.email.value,
      message: target.message.value,
    }

    if (!data.name || !data.email || !data.message) {
      alert('Please fill in all fields.')
      return
    }

    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT + '',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        },
      )

      if (response.ok) {
        router.push('/thanks')
      } else {
        router.push('/error')
      }
    } catch (err) {
      router.push('/error')
    }
  }

  return (
    <div className={styles.Contact}>
      <h1 className={styles.Contact_Title}>Contact us</h1>
      <p className={styles.Contact_Text}>
        Please fill this form in a decent manner.
      </p>
      <form className={styles.Contact_Form} onSubmit={onSubmit}>
        <label className={styles.Contact_Label} htmlFor="name">
          Name*
        </label>
        <input
          className={styles.Contact_InputText}
          id="name"
          name="name"
          required
        />
        <label className={styles.Contact_Label} htmlFor="email">
          Email*
        </label>
        <input
          className={styles.Contact_InputText}
          id="email"
          name="email"
          type="email"
          required
        />
        <label className={styles.Contact_Label} htmlFor="message">
          Message*
        </label>
        <textarea
          className={styles.Contact_Textarea}
          id="message"
          name="message"
          rows={4}
          required
        ></textarea>
        <button type="submit" className={styles.Contact_Button}>
          Submit
        </button>
      </form>
    </div>
  )
}
