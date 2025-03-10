import Image from "next/image";

import clsx from "clsx";

export type TextContainerProps = {
  text: string;
  secondaryText?: string;
  header?: string;
  imgSrc?: string;
  className?: string;
};

const TreatmentsTextContainer: React.FC<TextContainerProps> = ({
  text,
  header,
  imgSrc = "/",
  className,
  secondaryText,
}) => {
  return (
    <div
      className={clsx(
        "flex h-full flex-col w-96 items-center bg-white px-6 py-4 rounded-lg text-base leading-7 shadow-lg overflow-auto",
        className
      )}
    >
      <div className="overflow-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          <Image src={imgSrc} alt="text-icon" width={50} height={50} />
          <p className="text-xl mobile:text-base mobile-xs:text-base mb-3 text-chillGreenrz font-bold">
            {header}
          </p>
          <p className="text-sm mobile:text-xs mobile-xs:text-xs">{text}</p>
          <div>
            {secondaryText && (
              <p className="text-sm mobile:text-xs mobile-xs:text-xs font-bold text-center">
                Wskazania:
              </p>
            )}
            <p className="text-sm mobile:text-xs mobile-xs:text-xs font-bold text-center">
              {secondaryText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentsTextContainer;
