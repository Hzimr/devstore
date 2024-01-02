export default async function Search() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <div className="flex items-center justify-between">
      <h1>Search</h1>
    </div>
  )
}
