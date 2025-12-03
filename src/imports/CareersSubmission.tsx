import { useLanguage } from '@/contexts/LanguageContext';

function SubmissionHeader() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col items-center gap-[30px] mb-[40px]">
      <h2 className="text-[32px] font-bold text-black leading-none">
        {t('careers.submission.apply')}
      </h2>
      <div className="border-b-2 border-black pb-2">
        <a href={`mailto:${t('careers.submission.email')}`} className="text-[24px] font-bold text-black leading-none">
          {t('careers.submission.email')}
        </a>
      </div>
      <p className="text-[16px] text-[#4b4b4b] text-center whitespace-pre-line leading-[1.6]">
        {t('careers.submission.greeting')}
      </p>
    </div>
  );
}

function InfoCard({ 
  type, 
  title, 
  desc, 
  bgColor 
}: { 
  type: string, 
  title: string, 
  desc: string, 
  bgColor: string 
}) {
  return (
    <div className={`w-[640px] p-[30px] flex flex-col gap-[10px] items-start justify-center shrink-0 text-white`} style={{ backgroundColor: bgColor }}>
      <span className="text-[16px] font-bold leading-none opacity-90">
        {type}
      </span>
      <span className="text-[20px] font-bold leading-none mt-1">
        {title}
      </span>
      <p className="text-[16px] leading-[1.5] font-normal whitespace-pre-line opacity-90">
        {desc}
      </p>
    </div>
  );
}

function FooterNote() {
  const { t } = useLanguage();
  return (
    <div className="mt-[20px] text-center">
      <p className="text-[#e10800] text-[14px] whitespace-pre-line leading-[1.5]">
        {t('careers.submission.footer')}
      </p>
    </div>
  );
}

export default function CareersSubmission() {
  const { t } = useLanguage();
  
  return (
    <div className="relative w-full flex flex-col items-center py-[60px]">
      <div className="w-full max-w-[1200px] flex flex-col items-center px-[20px]">
        {/* Divider Line */}
        <div className="w-full h-[1px] bg-[#ABABAB] mb-[60px]" />
        
        <SubmissionHeader />
        
        <div className="flex flex-col gap-[20px]">
          <InfoCard 
            bgColor="#004592"
            type={t('careers.submission.required')}
            title={t('careers.submission.resumeTitle')}
            desc={t('careers.submission.resumeDesc')}
          />
          <InfoCard 
            bgColor="#727272"
            type={t('careers.submission.optional')}
            title={t('careers.submission.coverLetterTitle')}
            desc={t('careers.submission.coverLetterDesc')}
          />
        </div>

        <FooterNote />
        
        {/* Bottom Divider Line */}
        <div className="w-full h-[1px] bg-[#ABABAB] mt-[60px]" />
      </div>
    </div>
  );
}

