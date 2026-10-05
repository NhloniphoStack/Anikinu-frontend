import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function DetailSkeleton(){
    return (
        <div>
             <Skeleton 
             enableAnimation="true"
             baseColor='#ddd'
             highlightColor='#989898'
              height={`252px`} 
              width={`100%`}/>
            <div className="detail-skull-grid">
                <div className='skull-img-container'>
                <Skeleton baseColor='#ddd' highlightColor='#989898' enableAnimation="true" className='skull-img' borderRadius={`5px`} height={`300px`} width={'216px'}/>
                <Skeleton baseColor='#ddd' highlightColor='#989898' enableAnimation="true" width={'216px'} height={`400px`} />

                </div>
                
                <div className="detail-skull-stats">
                    <Skeleton baseColor='#ddd' highlightColor='#989898' enableAnimation="true" width={`204px`} height={`34px`}/>
                    <Skeleton baseColor='#ddd' highlightColor='#989898' enableAnimation="true" width={`204px`} height={`20px`} />
                    <Skeleton baseColor='#ddd' highlightColor='#989898' enableAnimation="true" width={`204px`} height={`20px`} />
                    <Skeleton baseColor='#ddd' highlightColor='#989898' enableAnimation="true" width={`204px`} height={`30px`} />
                    <Skeleton baseColor='#ddd' highlightColor='#989898' enableAnimation="true" width={`500px`} height={`170px`} />
                </div>
            </div>
        
        </div>
    )
}