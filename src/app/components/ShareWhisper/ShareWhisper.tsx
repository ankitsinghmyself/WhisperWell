import { useState } from 'react';

export default function ShareWhisper() {
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [allowComments, setAllowComments] = useState(true);

  const handleSubmit = () => {
    // You can replace this with actual API call or handler
    console.log({ message, category, tags, allowComments });
  };

  return (
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        {/* Header */}
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#141414] text-[32px] font-bold leading-tight">
              Share Your Story
            </p>
            <p className="text-[#757575] text-sm font-normal leading-normal">
              Your words, your truth, anonymously shared.
            </p>
          </div>
        </div>

        {/* Textarea */}
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <textarea
              placeholder="What's on your mind?"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#e0e0e0] bg-white focus:border-[#e0e0e0] min-h-36 placeholder:text-[#757575] p-[15px] text-base font-normal leading-normal"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>

        {/* Category */}
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <input
              placeholder="Category (optional)"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#e0e0e0] bg-white focus:border-[#e0e0e0] h-14 placeholder:text-[#757575] p-[15px] text-base font-normal leading-normal"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
        </div>

        {/* Tags */}
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <input
              placeholder="Tags (optional)"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141414] focus:outline-0 focus:ring-0 border border-[#e0e0e0] bg-white focus:border-[#e0e0e0] h-14 placeholder:text-[#757575] p-[15px] text-base font-normal leading-normal"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </label>
        </div>

        {/* Toggle */}
        <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
          <p className="text-[#141414] text-base font-normal leading-normal flex-1 truncate">
            Allow Comments
          </p>
          <div className="shrink-0">
            <label className={`relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full p-0.5 ${allowComments ? 'justify-end bg-black' : 'bg-[#f2f2f2]'}`}>
              <div className="h-full w-[27px] rounded-full bg-white shadow-md"></div>
              <input
                type="checkbox"
                className="invisible absolute"
                checked={allowComments}
                onChange={() => setAllowComments(!allowComments)}
              />
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex px-4 py-3 justify-end">
          <button type='button'
            onClick={handleSubmit}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-black text-white text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Submit</span>
          </button>
        </div>
      </div>
  );
}
