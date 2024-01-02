// import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'
// const ChatsPage =(props)=>{
//     const chatProps = useMultiChatLogic('941dfdbf-fe2c-4a42-9745-5ccdce825576', props.user.username, props.user.secret)
//     return <div style={{height:'100vh'}}>
//         <MultiChatSocket {...chatProps} />
//         <MultiChatWindow {...chatProps} style={{height:'100%'}} />

//     </div>
// }


import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props)=> {
  return (
    <div style={{height:'100vh'}}>
    <PrettyChatWindow
      projectId="941dfdbf-fe2c-4a42-9745-5ccdce825576"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100vh' }}
    />
    </div>
  );
}
export default ChatsPage;