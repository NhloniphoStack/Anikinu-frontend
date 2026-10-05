

export default function ChangelogSkeleton({count = 1}){
    return (
        <>
        {Array.from({length: count}, (_, i) => {
            return (
                <div key={i} className="log-skeleton-card">
                    <div className="log-skeleton-container">
                        <div className="log-skeleton-version"></div>
                        <div className="log-skeleton-date"></div>
                    </div>
                   
                    <div className="log-skeleton-title"></div>
                    <div className="log-skeleton-content"></div>
                    <div className="log-skeleton-chips"></div>
                </div>
            )
        })}
        </>
    )
}