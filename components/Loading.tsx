export const Loading = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-y-12" aria-label="loading">
    {
      [...Array(10).keys()]
        .map(id => (
          <div key={id} className="bg-slate-100 rounded-lg p-4 h-32 w-80">
          </div>
        ))
    }
  </div>
)