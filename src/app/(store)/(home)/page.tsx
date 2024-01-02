export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <div className="flex items-center justify-between">
      <h1>hello world</h1>
    </div>
  )
}
