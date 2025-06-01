import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#141414] tracking-light text-[32px] font-bold leading-tight min-w-72">
            Terms of Service
          </p>
        </div>

        <h3 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          1. Acceptance of Terms
        </h3>
        <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
          By accessing or using Hidden Voice, you agree to be bound by these Terms
          of Service. If you do not agree to these terms, please do not use the
          platform.
        </p>

        <h3 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          2. User Conduct
        </h3>
        <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
          You agree to use Hidden Voice responsibly and respectfully. You will not
          engage in any activity that is unlawful, harmful, threatening, abusive,
          harassing, defamatory, vulgar, obscene, invasive of another&apos;s
          privacy, or otherwise objectionable.
        </p>

        <h3 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          3. Content Restrictions
        </h3>
        <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
          You are solely responsible for the content you post on Hidden Voice. You
          will not post content that infringes on any intellectual property rights,
          contains personal information of others without their consent, or promotes
          illegal activities.
        </p>

        <h3 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          4. Privacy Policy
        </h3>
        <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
          Your privacy is important to us. Please review our Privacy Policy to
          understand how we collect, use, and protect your personal information.
        </p>

        <h3 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          5. Moderation Practices
        </h3>
        <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
          Hidden Voice reserves the right to moderate content and remove any posts
          that violate these Terms of Service. We may also suspend or terminate
          accounts for repeated violations.
        </p>

        <h3 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          6. Disclaimers
        </h3>
        <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
          Hidden Voice is provided &quot;as is&quot; without any warranties. We do not
          guarantee the accuracy, completeness, or reliability of any content posted
          on the platform. Use of Hidden Voice is at your own risk.
        </p>

        <h3 className="text-[#141414] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          7. Changes to Terms
        </h3>
        <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4">
          We may update these Terms of Service from time to time. We will notify you
          of any significant changes, and your continued use of Hidden Voice after
          such changes constitutes your acceptance of the new terms.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
