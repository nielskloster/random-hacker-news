export const Loading = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
    {
      [...Array(10).keys()]
        .map(id => (
          <div key={id} className="bg-slate-100 rounded p-4 h-32 w-80">
            <h1></h1>
            <div></div>
          </div>
        ))
    }
  </div>
)