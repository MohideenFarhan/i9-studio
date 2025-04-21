// 'use client'
// import { Button } from '@/components/ui/button'
// import React from 'react'
// import CustomModal from '../../../../../components/ui/custom-modal' // Adjust the path as needed
// import UploadMediaForm from './upload-media'

// type Props = {
//     subaccountId: string
// }

// const MediaUploadButton = (props: Props) => {

//     function setOpen(arg0: React.JSX.Element) {
//         throw new Error('Function not implemented.')
//     }

//     return (
//         <Button
//             onClick={() => {
//                 setOpen(
//                     <CustomModal
//                         title='Upload Media'
//                         subheading='Upload a file to your media bucket'
//                     >
//                         <UploadMediaForm subaccountId={props.subaccountId}></UploadMediaForm>
//                     </CustomModal>
//                 )
//             }}
//         >
//             Upload
//         </ Button >
//     )
// }

// export default MediaUploadButton