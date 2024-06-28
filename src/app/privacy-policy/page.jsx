import Link from 'next/link'
import React from 'react'
import PrivacyLayout from './layout'

const page = () => {
  return (
    <>
      <PrivacyLayout>
        <header className='bg-gray-100 mt-20 py-4 w-[90%] mx-auto'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='flex items-center justify-between'>
              <span className='text-[30px] font-bold text-gray-900 dark:text-gray-50'>
                Privacy Policy
              </span>
            </div>
          </div>
        </header>
        <main className=' my-12 md:px-6 w-[90%] mx-auto'>
          <div className='grid gap-8 lg:grid-cols-[2fr_1fr]'>
            <div>
              <p className='text-gray-500 dark:text-gray-400 pb-10'>
                At Hiring Tech, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                <Link
                  href='hiringtech.in'
                  className='text-[#2d20a7]'
                >
                  {' '}
                  hiringtech.in{' '}
                </Link>
              </p>
              <section className=''>
                <h1 className='text-2xl font-bold '>Information We Collect:</h1>
                <h2 className='text-xl font-medium mt-5'>We may collect and process the following data about you:</h2>
                <h3 className='text-lg font-medium'>Personal Information:</h3>
                <p className='text-gray-500 dark:text-gray-400 pb-10'>
                  When you visit our Website, register, fill out forms, or participate in surveys or contests, we may collect personal information such as your name, email address, postal address, phone number, and other contact details.
                </p>
                <h3 className='text-lg font-medium'>Usage Data:</h3>
                <p className='text-gray-500 dark:text-gray-400 pb-10'>
                  We may also collect information about your usage of the Website, including IP address, browser type, referring/exit pages, and operating system.
                </p>
              </section>
              <section className='space-y-3'>
                <h2 className='text-2xl font-bold'>
                  How We Use Your Information:
                </h2>
                <p className='text-xl'>
                  We use the information we collect in the following ways:
                </p>
                <ol className='text-gray-500 text-md'>
                  <p>* To provide, operate, and maintain our Website;</p>
                  <p>* To improve, personalize, and expand our Website's offerings;</p>
                  <p>* To understand and analyze how you use our Website and develop new products, services, features, and functionality;</p>
                  <p>* To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the Website, and for marketing and promotional purposes;</p>
                  <p>* To process your transactions and manage your orders;</p>
                  <p>* To comply with legal obligations and resolve any disputes that we may have.</p>
                </ol>
              </section>
              <section className='space-y-6 mt-10'>
                <h2 className='text-2xl font-bold'>Protection of Your Data:</h2>
                <p className='text-gray-500 dark:text-gray-400'>
                  We take the security of your information seriously and use reasonable administrative, technical, and physical security measures to protect your personal information. However, please be aware that no method of transmission over the internet, or method of electronic storage, is 100% secure.
                </p>
              </section>
              <section className='space-y-6 mt-10'>
                <h2 className='text-2xl font-bold'>Disclosure of Information:</h2>
                <p className='text-gray-500 dark:text-gray-400'>
                  We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our Website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
                </p>
              </section>
              <section className='space-y-6 mt-10'>
                <h2 className='text-2xl font-bold'>Children&apos;s Privacy</h2>
                <p className='text-gray-500 dark:text-gray-400'>
                  Protecting the privacy of young children is especially important. For that reason, we do not knowingly collect or maintain personally identifiable information from persons under 13 years-of-age without verifiable parental consent.
                </p>
              </section>
              <section className='space-y-6 mt-10'>
                <h2 className='text-2xl font-bold'>Your Choices</h2>
                <p className='text-gray-500 dark:text-gray-400'>
                  You can always opt not to disclose information to us, but keep in mind some information may be needed to register with us or to take advantage of some of our features.
                </p>
              </section>
              <section className='space-y-6 mt-10'>
                <h2 className='text-2xl font-bold'>Changes to This Privacy Policy</h2>
                <p className='text-gray-500 dark:text-gray-400'>
                  We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page.
                </p>
              </section>
              <section className='space-y-6'>
                {/* <h2 className='text-2xl font-bold'>User Rights</h2> */}
                <br />
                <br />

                <p className=''>
                  You have the option to opt-out of receiving promotional emails
                  or newsletters from Hiring Tech. By using our website, you
                  consent to the collection and use of your information as
                  described in this Privacy Policy. If you have any questions or
                  concerns about our privacy practices, please contact us at
                  <Link
                    href='mailto:career@hiringtech.in'
                    className='text-[#2d20a7]'
                  >
                    {' '}
                    career@hiringtech.in{' '}
                  </Link>
                  <br />
                  This Privacy Policy was last updated on 28th June 2024.
                  <br />
                  Thank you for trusting Hiring Tech with your privacy.
                </p>
              </section>
            </div>
          </div>
        </main>
      </PrivacyLayout>
    </>
  )
}

export default page
