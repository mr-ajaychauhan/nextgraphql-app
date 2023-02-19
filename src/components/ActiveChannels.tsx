import { GET_ACTIVECHANNEL } from '@/graphql/querise'
import { useQuery } from '@apollo/client'

const ActiveChannel = (channelProps:any) => {
    return (
    <>
    <p>{channelProps.id}</p>
    </>
    )
}
const ActiveChannels = () => {
    const  {loading,error,data} = useQuery(GET_ACTIVECHANNEL)
    if (loading) {
        return (
            <>
            <p>Loading ....</p>
            </>
        )
    }
    if (error) {
        return (
            <>
            <p>Some Error ...</p>
            </>
        )
    }
    console.log(data);
    // return data.activeChannel.map((activeChannel:any) => <ActiveChannel channelProps={...activeChannel} />)
    return (
        <>
        <p>{data.activeChannel.id}</p>
        </>
    )

}

export default ActiveChannels