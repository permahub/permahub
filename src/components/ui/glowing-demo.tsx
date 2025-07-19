"use client";

import { cn } from "@/lib/utils";
import { createClient } from '@supabase/supabase-js';
import { format } from 'date-fns';
import React from 'react';
import './glowing-demo.css';

const supabase = createClient(
  'https://obhyfopieuvpnqjbgjhn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9iaHlmb3BpZXV2cG5xamJnamhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1NDQ0ODgsImV4cCI6MjA2MzEyMDQ4OH0.ZMOa42K20GQrrqzc8JM4xb8HhnfjdcgEaWPnosIVcMw'
);

interface Answer {
  id: number;
  answers: string;
  campaign: string;
  created_at: string;
}

const campaignQuestions: Record<string, { de: string; en: string }> = {
  ad: {
    de: "WELCHE BERLIN-GESCHICHTE WÜRDEST DU BEWAHREN?",
    en: "WHICH BERLIN STORY WOULD YOU PRESERVE?"
  },
  metro: {
    de: "WIE KÖNNEN WIR BERLINS GESCHICHTEN FÜR DIE ZUKUNFT BEWAHREN?",
    en: "HOW CAN WE PRESERVE BERLIN'S STORIES FOR THE FUTURE?"
  },
  truck: {
    de: "WENN MAUERN SPRECHEN KÖNNTEN, WAS WÜRDEN SIE ERZÄHLEN?",
    en: "IF WALLS COULD SPEAK, WHAT WOULD THEY SAY?"
  },
  flyposting: {
    de: "WAS WÄRE, WENN NICHTS WICHTIGES JE VERSCHWINDEN MÜSSTE?",
    en: "WHAT IF NOTHING IMPORTANT EVER HAD TO DISAPPEAR?"
  },
  "sticker-bombing": {
    de: "WAS ERINNERT BERLIN?",
    en: "WHAT DOES BERLIN REMEMBER?"
  },
  "floor-graphics": {
    de: "WAS VERBIRGT SICH UNTER BERLINS OBERFLÄCHE?",
    en: "WHAT LIES BENEATH BERLIN'S SURFACE?"
  }
};

export function GlowingEffectDemo() {
  const [answers, setAnswers] = React.useState<Answer[]>([]);

  React.useEffect(() => {
    supabase
      .from("berlin_answers")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        if (data) {
          setAnswers(data as Answer[]);
        }
      });
  }, []);

  return (
    <div className="glow-demo-isolated w-full max-w-5xl mx-auto">
      <ul className="list-none grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
        {answers.map((answer, index) => {
          const question = campaignQuestions[answer.campaign] || { de: "", en: "" };
          return (
            <GridItem
              key={answer.id}
              area={`md:[grid-area:${Math.floor(index/2) + 1}/${(index % 2) * 6 + 1}/${Math.floor(index/2) + 2}/${(index % 2) * 6 + 7}] xl:[grid-area:${Math.floor(index/3) + 1}/${(index % 3) * 4 + 1}/${Math.floor(index/3) + 2}/${(index % 3) * 4 + 5}]`}
              title={question.de}
              enQuestion={question.en}
              description={answer.answers}
              date={answer.created_at}
              campaign={answer.campaign}
              liProps={{ className: 'list-none', style: { listStyle: 'none', marker: 'none' } }}
            />
          );
        })}
      </ul>
    </div>
  );
}

interface GridItemProps {
  area: string;
  title: string;
  enQuestion: string;
  description: string;
  date: string;
  campaign: string;
  liProps?: any;
}

const GridItem = ({ area, title, enQuestion, description, date, liProps = {} }: GridItemProps) => {
  const formattedDate = format(new Date(date), "MMM d, yyyy");
  const [showEnglish, setShowEnglish] = React.useState(false);

  return (
    <li
      className={cn("grid-item min-h-[14rem] w-full list-none", area, liProps.className)}
      style={{ ...liProps.style, listStyle: 'none', marker: 'none' }}
      onMouseEnter={() => setShowEnglish(true)}
      onMouseLeave={() => setShowEnglish(false)}
      onFocus={() => setShowEnglish(true)}
      onBlur={() => setShowEnglish(false)}
      tabIndex={0}
    >
      <div className="relative h-full rounded-[1.5rem] shadow-[0_0_16px_2px_#fff8]">
        <div className="glowing-border rounded-[1.5rem]" />
        <div className="content flex h-full flex-col justify-between gap-2 overflow-hidden p-8 pb-12">
          <div className="w-full flex justify-center mb-2">
            <span className="date-text text-xs text-muted-foreground text-center">{formattedDate}</span>
          </div>
          <div className="relative mb-2" style={{ minHeight: '1.5rem' }}>
            {showEnglish ? (
              <span className="title text-xs font-grotesk font-light text-gray-400">{enQuestion}</span>
            ) : (
              <span className="title text-xs font-grotesk font-light text-gray-400">{title}</span>
            )}
          </div>
          <div className="answer text-2xl md:text-3xl font-extrabold text-white font-serif mt-8 mb-4 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm shadow">
            {description}
          </div>
          {/* Commenting out the campaign badge/label */}
          {/* <div className="w-full flex justify-center absolute left-0 right-0 bottom-2">
            <span className="campaign-badge text-xs px-3 py-1 rounded-full font-bold text-center">{campaign.replace(/-/g, ' ')}</span>
          </div> */}
        </div>
      </div>
    </li>
  );
};
