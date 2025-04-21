'use client'
import React, { useEffect, useState } from 'react'
import MediaComponent from '../../media';

type Props = {
    subaccountId: string;
    // add other props as needed
}

const MediaBucketTab = (props: Props) => {
    const [data, setdata] = useState<any>(null); // Use `any` for now if the type is unknown
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await getMedia(props.subaccountId);
    //         setdata(response);
    //     };
    //     fetchData();
    // }, [props.subaccountId]);

    return (
        <div className="h-[900px] w-[300px] p-4">
            <MediaComponent subaccountId={props.subaccountId} />
        </div>
    );
};

export default MediaBucketTab;

// Placeholder MediaComponent
// const MediaComponent = ({ data, subaccountId }: { data: any; subaccountId: string }) => {
//     return (
//         <div>
//             <h2>Media for Subaccount: {subaccountId}</h2>
//             {data ? (
//                 <ul>
//                     {data.map((item: any, index: number) => (
//                         <li key={index}>{item.name || 'Unnamed Media'}</li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>Loading media...</p>
//             )}
//         </div>
//     );
// };

// Placeholder getMedia function
// async function getMedia(subaccountId: string) {
//     // Simulate an API call
//     return new Promise((resolve) =>
//         setTimeout(() => {
//             resolve([
//                 { name: 'Media 1' },
//                 { name: 'Media 2' },
//                 { name: 'Media 3' },
//             ]);
//         }, 1000)
//     );
// }
