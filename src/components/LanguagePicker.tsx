"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <label className="border-2 rounded d-flex">
      <select
        defaultValue={localActive}
        className="p-2 bg-transparent text-white border-0 outline-none"
        onChange={onSelectChange}
        disabled={isPending}>
        <option value="en" className="text-black">
          English
        </option>
        <option value="ar" className="text-black">
          Arabic
        </option>
      </select>
    </label>
  );
}
