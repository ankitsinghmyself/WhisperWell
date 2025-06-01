import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#141414] tracking-light text-[32px] font-bold leading-tight min-w-72">
            Privacy Policy
          </p>
        </div>

        <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
          At Hidden Voice, we value your privacy and are committed to protecting your anonymity. This Privacy Policy explains how we handle your data when you use our platform.
          Please read this policy carefully to understand our practices regarding your information and how we will treat it.
        </p>

        <Section title="Information We Collect">
          We collect minimal information to ensure the functionality and safety of our platform. Specifically, we collect IP addresses solely for the purpose of managing post frequency (enforcing a 10-minute gap between posts) and preventing abuse. No other personal information is stored. We do not create user accounts, and all posts are entirely anonymous.
        </Section>

        <Section title="How We Use Your Information">
          We use the collected IP addresses to enforce posting limits and prevent misuse of the platform. This ensures a fair and respectful environment for all users. We do not use this information to identify individuals or track their activity beyond the scope of managing post frequency and abuse prevention.
        </Section>

        <Section title="Data Retention">
          IP addresses are retained for a limited period necessary to manage post frequency and prevent abuse. After this period, the data is securely deleted. We do not retain any other personal information.
        </Section>

        <Section title="Third-Party Services">
          We do not share any user data with third-party services, as we do not collect any personal information beyond IP addresses used for managing post frequency and preventing abuse.
        </Section>

        <Section title="Your Rights">
          Given that we do not store any personal information beyond IP addresses used for managing post frequency and preventing abuse, there are no user accounts or personal data to access, correct, or delete. Our platform is designed to ensure complete anonymity.
        </Section>

        <Section title="Contact Us">
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <a href="/contact-us" className="underline">contact us</a>.
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <>
    <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
      {title}
    </h2>
    <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
      {children}
    </p>
  </>
);

export default PrivacyPolicy;
