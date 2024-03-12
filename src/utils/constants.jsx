export const PROFILE_IMG = "http://aws.astrotalk.com/consultant_pic/"

export const TICKED = "https://d1gcna0o0ldu5v.cloudfront.net/fit-in/24x24/assets/images/Chat_with_astrologers/webp/tick_icon.webp";

export const PROFILE_BG = "https://aws.astrotalk.com/assets/images/astro-background-gray.webp"

export const MULTI_LANG = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "marathi", name: "Marathi" },
    { identifier: "spanish", name: "Spanish" },
    {identifier:"telugu",name:"Telugu"},
    {identifier:"japanese",name:"Japanese"}
  ];


  export const GPT_LANG = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "marathi", name: "Marathi" },
    { identifier: "telugu", name: "Telugu" },
    { identifier: "tamil", name: "Tamil" },
    { identifier: "bengali", name: "Bengali" },
    { identifier: "gujarati", name: "Gujarati" },
    { identifier: "kannada", name: "Kannada" },
    { identifier: "malayalam", name: "Malayalam" },
    { identifier: "punjabi", name: "Punjabi" },
    { identifier: "hinglish", name: "Hinglish" },
    { identifier: "french", name: "French" },
    { identifier: "german", name: "German" },
    { identifier: "russian", name: "Russian" },
    { identifier: "italian", name: "Italian" },
    { identifier: "arabic", name: "Arabic" },
    { identifier: "chinese", name: "Chinese" },
    { identifier: "portuguese", name: "Portuguese" },
    { identifier: "dutch", name: "Dutch" }
   
  ];
  

export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;

export const CHAT_BOT = process.env.REACT_APP_BOT_PROMPT;

export const HOROSCOPE = process.env.REACT_APP_HOROSCOPE_PROMPT;

export const TALK_PROMPT = process.env.REACT_APP_TALK_PROMPT;

export const ASTRO_KUNDLI_PROMPT = `<span class="text-purple-300 mb-2 text-lg lg:text-2xl w-full text-center lg:font-semibold font-medium tracking-wider lg:tracking-wide">Hey, I am an AstroKundli integrated in AstroGPT, created by Sir Vivek Khule, a visionary mind behind AstroGPT. Please note that these readings may not be fully accurate.</span><br><br>
<div class="flex flex-col lg:flex-row lg:justify-between justify-start items-start lg:items-start">
 <div class="flex flex-col justify-start w-full lg:w-5/12">
<h1 class="text-purple-300 text-lg lg:text-xl my-2 lg:my-4 font-semibold lg:font-bold border-b-2 pb-0.5 lg:pb-1.5 border-purple-300">Zodiac Sign: [Zodiac Sign]</h1>
      <p class="text-purple-100 font-normal lg:font-medium mb-4 lg:mb-6 text-lg tracking-wider lg:tracking-wide">As Per your Vedic astrological reading, you are born under the zodiac sign of [Zodiac Sign]. This influences your personality and life path.</p><br>
      
      <h1 class="text-purple-300 text-lg lg:text-xl my-2 lg:my-4 font-semibold lg:font-bold border-b-2 pb-0.5 lg:pb-1.5 border-purple-300">Personality:</h1>
      <p class="text-purple-100 font-normal lg:font-medium mb-4 lg:mb-6 text-lg tracking-wider lg:tracking-wide">You are known for your [Personality Traits]. You are recognized for your [Strengths] and [Weaknesses], which shape your interactions and decisions.</p><br>
      
      <h1 class="text-purple-300 text-lg lg:text-xl my-2 lg:my-4 font-semibold lg:font-bold border-b-2 pb-0.5 lg:pb-1.5 border-purple-300">Career Prospects:</h1>
      <p class="text-purple-100 font-normal lg:font-medium mb-4 lg:mb-6 text-lg tracking-wider lg:tracking-wide">Your career prospects show [Career Outlook]. Your strengths lie in [Career Strengths], which can lead to success in [Career Fields].</p><br>
      
      <h1 class="text-purple-300 text-lg lg:text-xl my-2 lg:my-4 font-semibold lg:font-bold border-b-2 pb-0.5 lg:pb-1.5 border-purple-300">Love Life:</h1>
      <p class="text-purple-100 font-normal lg:font-medium mb-4 lg:mb-6 text-lg tracking-wider lg:tracking-wide">Your love life is influenced by [Love Life Insights]. Your romantic relationships are shaped by [Love Life Factors], affecting your emotional fulfillment.</p><br>
      </div>
      <div class="flex  flex-col justify-start w-full lg:w-5/12">
      <h1 class="text-purple-300 text-lg lg:text-xl my-2 lg:my-4 font-semibold lg:font-bold border-b-2 pb-0.5 lg:pb-1.5 border-purple-300">Financial Situation:</h1>
      <p class="text-purple-100 font-normal lg:font-medium mb-4 lg:mb-6 text-lg tracking-wider lg:tracking-wide">Your financial situation presents [Financial Challenges/Opportunities]. It's crucial to follow [Financial Advice] for stability and prosperity.</p><br>
      
      <h1 class="text-purple-300 text-lg lg:text-xl my-2 lg:my-4 font-semibold lg:font-bold border-b-2 pb-0.5 lg:pb-1.5 border-purple-300">Happiness:</h1>
      <p class="text-purple-100 font-normal lg:font-medium mb-4 lg:mb-6 text-lg tracking-wider lg:tracking-wide">Your happiness is influenced by [Factors Affecting Happiness]. By focusing on [Happiness Tips], you can enhance your well-being and fulfillment.</p><br>
      
      <h1 class="text-purple-300 text-lg lg:text-xl my-2 lg:my-4 font-semibold lg:font-bold border-b-2 pb-0.5 lg:pb-1.5 border-purple-300">Motivational Message:</h1>
      <p class="text-purple-100 font-normal lg:font-medium mb-4 lg:mb-6 text-lg tracking-wider lg:tracking-wide">Remember, [Motivational Message]. Stay true to yourself, embrace opportunities, and navigate challenges with resilience. Your journey is unique, and your potential is limitless.</p>      
      </div>
      </div>(remember always give responce like in this format only just change the insights for each but that h1 div and all styling part keep it as it is heading title and all okay)
      `
