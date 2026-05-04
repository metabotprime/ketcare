/**
 * Legal copy ported from the existing ketcare.com WordPress site.
 *
 * IMPORTANT: This text needs final review by Ketcare's legal counsel before
 * launch. Some sections were extracted from page-builder markup and may have
 * gaps relative to the original (notably bullet lists in informed-consent
 * and consumer-health-data-privacy-policy). Each page is rendered with the
 * `draft` flag enabled until counsel approves.
 *
 * The structure here keeps content portable: the lawyer can edit strings
 * directly and any non-developer can add headings or bullets without
 * touching component code.
 */

export type LegalContent =
  | string
  | { heading: string }
  | { bullets: string[] };

export const PRIVACY_POLICY: LegalContent[] = [
  'PLEASE READ OUR PRIVACY POLICY CAREFULLY BEFORE USING OUR SERVICES AND OUR WEBSITE.',
  { heading: 'I. Policy Purpose and Applicability' },
  'At Ketcare, we hold your privacy and personal data in the highest regard. We appreciate you visiting our site and placing your trust in us as you embark on this path. This Privacy Policy ("Policy") outlines the data privacy approaches of Ketcare, Inc. ("Ketcare," "we," "us," or "our"), including how we gather, utilize, and share your Personal Information when you access our website, web pages, and mobile application ("Site"), as well as via social platforms, our promotional efforts, and other interactions detailed in this Policy (together, the "Service"). This Policy does not cover the data practices of any third-party sites or apps that might gather data, link to, or be reachable from the Service. It also excludes identifiable health data you share with Ketcare\'s partner medical providers ("Affiliated Medical Groups") during their intake processes, treatment sessions, or related medical documentation. For details on their data handling, consult the Privacy Practices of the Affiliated Medical Groups.',
  'Neither Ketcare nor the Affiliated Medical Groups qualifies as a "covered entity" or "business associate" under the Health Insurance Portability and Accountability Act, along with its regulations and updates ("HIPAA"). That said, any Personal Information you share could fall under protections from relevant state regulations, and Ketcare along with its Affiliated Medical Groups will handle and share such data only as permitted by those laws.',
  'The Service is designed exclusively for individuals within the United States. People located outside the U.S. should avoid using the Service. If you\'re based outside the U.S., details about your Service interactions might be sent, handled, or stored beyond your state or nation, potentially falling under local rules that offer fewer safeguards than those in the U.S.',
  'The Service targets only those 18 years or older. We do not intentionally gather Personal Information from anyone under 18 ("Minors"). We avoid seeking out or knowingly obtaining data from Minors, and if we discover any such data has been collected, we\'ll promptly remove it. If you realize we\'ve obtained Personal Information from a Minor, reach out to us at support@ketcare.com.',
  { heading: 'II. Personal Information' },
  '"Personal Information" refers to any details about or linked to an individual that directly identifies them or could reasonably do so when paired with other data from any origin. We exclude from Personal Information any data that can\'t trace back to a particular individual—such as de-identified, pseudonymized, anonymized, or aggregated details about you or our other users. Moreover, once we de-identify your Personal Information, we pledge to keep it in that non-identifiable state.',
  'We may transform your Personal Information into anonymized, pseudonymized, aggregated, or de-identified data by removing elements (such as your name, email address, or any linkable tracking identifiers) that make the information personally identifiable to you. Such information may be used for business operations, shared with third parties for legitimate business purposes, or leveraged for research and development of new products and services.',
  { heading: 'III. Information We Collect' },
  'You might supply us with Personal Information via the Service, including via account registration, communications with our team, and your interactions with our content.',
  'We obtain certain details about you from partners who supply this as part of their collaboration with us, such as Meta, Google Analytics, Google Ads, Hotjar, Impact, Microsoft Bing Ads, Stripe, and similar services. These entities could automatically record device specifics, web behavior, and location data.',
  { heading: 'IV. Targeted Advertising' },
  'We collaborate with ad firms and social networks that deploy cookies and comparable technologies to capture details on your activities across the Service and other sites over time, then use that to present online promotions aligned with your likely interests.',
  { heading: 'V. Anonymized and Aggregated Data' },
  'We may anonymize, pseudonymize, aggregate, or de-identify your Personal Information by excising elements (such as your name, email, or traceable tracking ID) that render the data personally attributable to you. We pursue this for our operational needs, sharing with others for legitimate business goals, and research plus development of innovative products or services.',
  { heading: 'VI. Service Providers' },
  'We collaborate with companies that supply assistance for our initiatives or aid in managing the Service or our enterprise (for instance, hosting, sustaining, and upgrading our data infrastructure, user help, order completion, transaction handling, message sending, and web tracking). Ketcare\'s vendors encompass those that manage data we obtain or that we direct others to acquire. In our contracts with these vendors and their deployment, we adopt suitable precautions to confirm they are barred from releasing, employing, or distributing identifiable data beyond what\'s required for our handling tasks or as authorized or mandated by regulations.',
  { heading: 'VII. Your Rights' },
  'To exercise a Data Subject Right, you or your representatives can follow the "Contact Us" steps below. Additionally, sign into your account whenever to review and update your info. We\'ll verify your identity for these requests using on-file details like your name, email, phone, or latest engagement, if relevant.',
  { heading: 'VIII. External Sites and Services' },
  'The Service could include hyperlinks to external websites and additional digital platforms run by unrelated parties. Furthermore, our materials might appear embedded within web pages or other digital platforms unaffiliated with us, accessible via our partner marketing networks. We have no oversight over third-party websites, apps, or online platforms, nor do we bear responsibility for their practices. The data handling rules of those third parties will govern any details they gather, process, or release concerning your actions on their sites after you select those external links. We recommend reviewing the privacy notices for any other websites, apps, and digital services you engage with.',
  { heading: 'IX. Data Security' },
  'We\'ve implemented technical, administrative, and physical protections aimed at securing the Personal Information we gather. That said, risks to security are unavoidable in any online or digital system, and we can\'t assure that intruders, malicious actors, or other unapproved outsiders won\'t breach our defenses to unlawfully gather, view, take, or alter your Personal Information. Transmitting and revealing data online isn\'t fully risk-free. You assume the risks of any Personal Information transfer. We hold no liability for bypassing privacy controls or security features on our Service, within your OS, or on your mobile setup. As such, safeguarding your access credentials—like your username and password—falls to you.',
  { heading: 'X. Contact Us' },
  'Should you seek more details on our data handling approaches, have inquiries, or wish to submit a request, feel free to connect with us via email at privacy@ketcare.com.',
];

export const TERMS_OF_USE: LegalContent[] = [
  { heading: 'Acceptance of Terms' },
  'These Terms of Use ("Terms") govern your access to and use of http://ketcare.com (the "Site") and the services provided by Ketcare ("Ketcare," "we," "us," or "our"). By accessing or using the Site or our services, you agree to comply with and be legally bound by these Terms, as well as our Privacy Policy. If you do not agree to these Terms, you are not permitted to use the Site or our services.',
  'Your continued use of the Site and our services indicates your acceptance of any changes or updates to these Terms. We may revise these Terms from time to time, and it is your responsibility to review them periodically. If you continue to use the Site after changes have been posted, it means you accept and agree to the revised Terms.',
  { heading: 'Eligibility' },
  'These Terms apply to all visitors, users, and others who access or use the Site. By using the Site, you represent that you are at least 18 years old, or the legal age of majority in your jurisdiction, and that you have the authority to enter into this agreement. If you are using the Site or services on behalf of an organization, you confirm that you have the authority to bind that organization to these Terms.',
  { heading: 'Description of Services' },
  'Ketcare provides online tools, resources, and support services designed to connect users with independent medical providers and practices (the "Medical Providers"). Ketcare itself is not a medical practice and does not provide professional medical care. We do not own, employ, or control the Medical Providers, and we are not responsible for their clinical judgment or the quality of care they deliver.',
  'Any medical advice, diagnosis, or treatment you may receive comes directly from the Medical Providers, not from Ketcare. Our role is limited to offering non-clinical, administrative, and technical support that helps facilitate access to those providers.',
  'Throughout these Terms of Use, the professional medical services supplied by the Medical Providers, together with the non-clinical services we provide through the Site, are collectively referred to as the "Services."',
  { heading: 'Communications and Marketing' },
  'By providing your cell phone number or email address to Ketcare, or by otherwise agreeing to these Terms of Use, you consent to be contacted by Ketcare and its affiliated providers. This may include marketing communications such as emails, phone calls, and text/SMS messages, which could be sent using automated systems or prerecorded messages.',
  'You may opt out of receiving marketing-related text or SMS messages at any time by replying with the word STOP from the device receiving the messages. Please note that opting out of marketing messages may affect your ability to use certain features of the services that rely on SMS communication.',
  'You are not required to provide this consent as a condition of purchasing or using Ketcare\'s services. If you wish to use our services without receiving sales or marketing messages, please email us at support@ketcare.com so we can update your preferences. You will still receive essential service-related communications, such as account notices or transactional updates.',
  { heading: 'Dispute Resolution and Arbitration' },
  'Any dispute, claim, or controversy arising out of or relating to these Terms or your use of the Site or Services will be resolved through confidential binding arbitration rather than in court. This applies to disputes that may have arisen before these Terms took effect and to those that may arise after they end.',
  'In arbitration, there is no judge or jury, and court review of the decision is limited. Claims cannot be pursued as a class action or combined with others. The arbitrator, however, may award the same relief on an individual basis that a court could provide. The arbitrator\'s decision will be final and binding, and judgment may be entered in any court with jurisdiction.',
  'To start an arbitration, you must first send a written notice of your claim to Ketcare, Attn: Legal Office. The notice must include (i) a description of the claim and its basis, and (ii) the specific relief requested. If we cannot resolve the matter within thirty (30) days, either you or Ketcare may begin arbitration through the American Arbitration Association (AAA) under its Consumer Arbitration Rules. Proceedings will be handled by a single arbitrator and conducted in accordance with applicable AAA rules.',
  'Both you and Ketcare agree that disputes will only be handled on an individual basis, not as a class or representative action. If, for any reason, a claim goes to court instead of arbitration, both parties waive the right to a jury trial. However, either party may still go to court to seek an injunction or other remedy to prevent the misuse of its intellectual property.',
  { heading: 'Disclaimers and Limitation of Liability' },
  'Your use of the Site and Services is at your own risk. The Site and Services are provided on an "as is" and "as available" basis without any warranties of any kind, whether express or implied. This includes, but is not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or any guarantees arising from course of dealing or usage of trade.',
  'Ketcare does not guarantee that: (i) the Services will be available without interruption, securely, or at any specific time or location; (ii) any defects or errors will be corrected; (iii) the Services are free of viruses, malware, or other harmful components; or (iv) the results you obtain from using the Services will meet your expectations or requirements.',
  'To the fullest extent permitted by law, Ketcare and its affiliates disclaim all liability for any loss or damage resulting from your use of, or inability to use, the Site or Services.',
  'Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for incidental or consequential damages. In those cases, the exclusions and limitations set out in these Terms will apply to you only to the extent permitted by the laws of your jurisdiction.',
  { heading: 'Governing Law and Miscellaneous' },
  'These Terms, and the agreement formed between you and Ketcare, will be governed by and interpreted in accordance with applicable U.S. state law, without regard to conflict of law rules.',
  'Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any part of these Terms is found to be invalid or unenforceable by a court, the remaining provisions will continue in full effect.',
  'These Terms represent the entire agreement between you and Ketcare regarding your use of the Site and Services and replace any prior agreements we may have had on the same subject.',
  { heading: 'Changes to These Terms' },
  'We may update or modify these Terms from time to time at our discretion. If we make a material change, we will provide notice at least thirty (30) days before the new terms take effect. What qualifies as a material change will be determined by us.',
  'By continuing to use the Site or Services after revised Terms take effect, you agree to be bound by those changes. If you do not agree to the updated Terms, you must stop using the Site and Services.',
  { heading: 'Contact' },
  'If you have any questions about these Terms, please contact us at support@ketcare.com.',
];

export const INFORMED_CONSENT: LegalContent[] = [
  'Ketcare is a technology platform that supports independently owned and operated psychiatric medical practices in delivering essential mental health services to clients like you. The specific affiliated medical practice in your state, listed on the Ketcare website, will provide your care (referred to as "Practice" herein).',
  'The Practice offers psychiatric treatment via telehealth and, in some cases, in-person services. As part of this treatment, you may be prescribed ketamine, a medication shown to benefit conditions like anxiety and depression. Ketamine may be prescribed as tablets or liquid, compounded by pharmacies under Section 503A of the federal Food, Drug, and Cosmetic Act (FDCA), which does not require FDA approval. Consequently, the FDA has not confirmed the safety or efficacy of compounded ketamine for mental health conditions. While other ketamine-containing drugs are FDA-approved for anesthesia and analgesia, their safety and efficacy for mental health conditions have not been evaluated. Ketamine is a Schedule III medication, not suitable for everyone, with risks (detailed below) that must be weighed to determine if this treatment is appropriate for you.',
  { heading: 'How It Works' },
  'Ketamine, an NMDA receptor antagonist, operates through the glutamate system. At low doses, it may enhance neuroplasticity, enabling brain cells to form new connections, distinct from other psychiatric drugs like SSRIs or benzodiazepines. The full mechanism of ketamine\'s antidepressant effects is not yet fully understood, and future research may reveal additional pathways.',
  'As a dissociative anesthetic, ketamine induces a sense of detachment from reality and self. At prescribed doses, you may experience mild anesthetic, anxiolytic, antidepressant, or psychedelic effects. It can disrupt negative thoughts and preoccupations, with effects typically lasting 45-60 minutes, after which most people return to their normal state.',
  { heading: 'Potential Benefits' },
  'Ketamine can alleviate symptoms of various mental health conditions. In clinical studies, its antidepressant and anxiolytic effects may appear within hours, peaking 24-48 hours post-administration. Benefits vary, lasting from days to weeks after a single dose. A series of treatments, often intravenous (IV) over 2-3 weeks, can extend effects for weeks to months. Your clinician will tailor an initial treatment plan to meet your goals.',
  { heading: 'Eligibility' },
  'The Practice will review your medical history and assessment responses, requiring a physical and/or psychiatric consultation (telehealth or in-person) to confirm diagnosis and eligibility. You must be at least 18 and not meet these exclusion criteria:',
  {
    bullets: [
      'Ketamine allergy',
      'Ketamine use disorder (active or in remission)',
      'Active psychotic or manic symptoms, or a history of primary psychotic disorders (e.g., schizophrenia)',
      'Active suicidal ideation with method, intent, or plan',
      'Suicide attempt within the past year',
      'Untreated high blood pressure',
      'Serious heart conditions (e.g., congestive heart failure)',
      'Severe breathing issues (e.g., COPD)',
      'Unstable thyroid disease',
      'Elevated intraocular pressure (e.g., glaucoma)',
      'Elevated intracranial pressure',
      'Other serious medical conditions',
      'Pregnant, nursing, or trying to conceive',
    ],
  },
  'Conditions like active substance use disorder, severe trauma, or acute suicidality may require additional therapeutic support outside Ketcare to proceed. Notify your provider of any health changes affecting eligibility.',
  { heading: 'Working with a Guide' },
  'You may work with a Ketcare-affiliated Guide, trained in life coaching and psychedelic medicine best practices, to support your program, set intentions, and develop an integration plan. Guides are not licensed therapists and cannot treat diagnoses like anxiety or depression—that\'s the role of your clinician or external mental health provider. Guides aim to respond within 48 hours but do not offer 24/7 support.',
  { heading: 'Telehealth' },
  'Telehealth uses electronic communications to facilitate care, including video/phone consultations, chart review, remote prescribing, scheduling, and client education. Your data may be used for diagnosis, therapy, or education via health records, images, audio-video, or medical device data. Security protocols protect confidentiality, but data loss due to technical failures is possible, though unlikely. You agree to hold Ketcare and the Practice harmless for such losses.',
  'The Practice\'s clinicians complement, not replace, your primary care physician or mental health provider. Maintain overall care with your local doctor. Telehealth benefits include improved access and efficiency, but risks include equipment failures, inadequate data quality, privacy breaches, or incomplete medical advice due to limited records. At-home ketamine administration may pose additional risks due to lack of onsite monitoring for sedation or dissociation.',
  'Your clinician or Guide may use AI tools for recording/transcribing consultations for visit notes or quality assurance. You may request disabling this feature.',
  { heading: 'Alternatives' },
  'Consider other mood and anxiety treatments (e.g., antidepressants, mood stabilizers, psychotherapy) and in-person consultations before choosing ketamine or telehealth. Discuss alternatives with your clinician or primary care doctor.',
  { heading: 'Records and Confidentiality' },
  'Your treatment records are confidential, maintained like standard medical records. To share records, request a release form. Your information may be used per the Medical Groups\' Privacy Practices and Ketcare, Inc.\'s Privacy Policy.',
];

export const HEALTH_DATA_PRIVACY: LegalContent[] = [
  'This Consumer Health Data Privacy Policy ("Health Data Policy") describes how Ketcare Inc. ("Ketcare", "we", "us", or "our") processes Consumer Health Data as defined under applicable U.S. state privacy laws, including those in Nevada, Washington, and other jurisdictions. This policy applies to individuals who interact with our website, services, and digital platforms (collectively, the "Service"). Please review this Health Data Policy carefully, as it contains important information about how your Consumer Health Data is collected, used, and disclosed.',
  { heading: 'Definition' },
  '"Consumer Health Data" refers to any personal information that identifies your past, present, or future physical or mental health status, as defined under applicable state laws.',
  { heading: 'Data We Collect' },
  'Depending on your interaction with Ketcare, we may collect Consumer Health Data including health condition information you share through assessments and intake forms, treatment-related communications, biometric or device data shared with us, and inferences drawn from any of the above.',
  { heading: 'How We Collect It' },
  'We may collect Consumer Health Data directly from you when you interact with the Service, from affiliated medical providers as part of your treatment, from your authorized representatives, and via cookies and similar technologies on the Service.',
  { heading: 'How We Use It' },
  'We use Consumer Health Data to provide and improve the Service, support clinical operations of affiliated medical providers, comply with legal obligations, and (where consent is provided) communicate with you about treatment and related services.',
  { heading: 'How We Disclose It' },
  'We may disclose your Consumer Health Data to affiliated medical providers delivering your care, service providers acting on our behalf under written agreements, and any party authorized by you or required by law.',
  { heading: 'Your Rights' },
  'Depending on your state of residence, you may have rights to access, correct, delete, or restrict the use of your Consumer Health Data; withdraw consent; or appeal our decisions on a request. To exercise these rights, contact us using the details below. We may verify your identity before processing your request.',
  { heading: 'Updates' },
  'We may update this Health Data Policy periodically. When we do, we\'ll update the "Last Updated" date and post the revised version on our Service. Continued use of Ketcare after these changes means you accept the updated terms.',
  { heading: 'Contact' },
  'If you have questions, requests, or need further information about this Health Data Policy, please contact us at privacy@ketcare.com.',
];
