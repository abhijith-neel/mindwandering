import { CategoryCard } from "@/components/CategoryCard";

export const CompaniesThatShouldExist = () => {
  return (
    <CategoryCard title="Companies that should exist">
      <h1 className="border-b border-border pb-2 mb-4">2025</h1>
       <div className="space-y-3">
        <h3>8/21</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            A tool that takes emails out of your inbox and into a different place.
          </li>
          <li>
            Cursor for Word: An AI first Word Processor that lets you build documents instantaneously and use AI to create documents asap.
          </li>
          <li>
            Electric Grid monitioring and power usage should be predicatable down to the meter. Using AI we can identify and predict excatly what usage will look like by the household (and maybe even down to the plug point) and that in turn can be used to help save electricity or price better.
          </li>
        </ul>
       </div>
    </CategoryCard>
  );
}; 