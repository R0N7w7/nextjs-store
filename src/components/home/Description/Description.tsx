import Image from "next/image"

type Props = {}

export const Description = (props: Props) => {
  return (
    <section className="mx-auto flex px-5 max-w-5xl gap-2 mt-16 flex-col sm:flex-row w-full items-center justify-center">
      <div className="w-full aspect-video flex mx-autosm:justify-end p-4 relative">
        <Image
          src="/imgs/description.jpeg"
          alt="webos"
          className="object-cover w-full aspect-video rounded-3xl mx-auto max-w-md shadow-2xl shadow-mainContrast"
          fill
          quality={50}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0Z JTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCACCAIIDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAgMEAAEG/8QAGxABAQEBAQEBAQAAAAAAAAAAAAECEQMSITH/xAAYAQEBAQEBAAAAAAAAAAAAAAACAQMABP/EABcRAQEBAQAAAAAAAAAAAAAAAAABEQL/2gAMAwEAAhEDEQA/APJM7xuNI6uOxuO8awK7BwEMkIB5MyDMNzA6KCguNIORh0cDxymfIbAIul02wvUa8jSqGj1AVvyFDxnWJAcbg+Nx5ZW9hfG4PjnGvNCxpDMwMhmYYWDzDcwOIdnI1zucjmRZyZMsaUpXy5cn/IbkV1NrJWop1kncPlyfULpuoVWsELMxahny5YZwNjyyvThdjnB2Oca80LGkMzASG4jQLDcRRjJWIoxEojzk2ZbMNmWdQv5Dcn/IdZBdSbyn3Fm4m9IUck3CdH+kI00lULMy65QGiDXmjcFcFQteXOw3BUNw0gWKPOKsRN5qvNKzp+IbIDH8NgUW4DUNBoUTbiX0ivaX0VYj9E+lPom0UKBZxlVR1yt0NrCNtctD1rQ9aRw5TsVPKbitBqzzqnzR+dVedShYrwdL+J8U6UazpgNN0GqiFbS+qjdS+tcsS+ibSj0qbVWFA9ZzrKpvQ3QPpy6Z4Wu2udBdOfRw5TZTsVNKbjRKs86q89IcaU40lCxbjRs0lzo2bFnYf9A1oH2HWkEO9JvSm70m9NK4j0qfVN3SNUo7W6wesq6H6DdF/Tn0mJOjLpzpf03VxrzTpTMaTymZqNIsxpRjSLGj8aG11i3OzZtHnRs2OhYo+w3ZX2G6czsFvSfeha0TvRQaXuk6o9Uq1pB1us51lx2pfpz6B1urjOUfXeg67Er0cUyUzNJlMzQreKM07Ok2admhSUZ0ZNEZo5QCw76DdA61qxnW1orVFaVqtIzoNUu0ei60gVmbrKmomZlCOuxmGvRwKGZZgr0cm5OyzM6ZkMjMIV1ysyxnQ0qszSMqXQVmaRnXGZiR/9k="
        />
      </div>

      <div className="text-text w-full gap-6 flex flex-col items-center justify-center sm:items-start am:justify-start py-4">
        <h2 className="text-2xl font-semibold">Bring the future today</h2>
        <p className="text-xl max-w-sm">Future World: Your Gateway to Tomorrow&apos;s Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
      </div>
    </section>
  )
}