import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./mainLayout/MainLayout";
import Query_Review from "./pages/customerCare_Queries/query_review/Query_Review";
import Performance from "./pages/performance/Performance";
import Performance_Details from "./pages/performance/performance_details/Performance_Details";
import PopupContext from "./PopupContext";
import SignIn from "./pages/signIn/SignIn";
import Dashboard from "./pages/dashboard/Dashboard";
import CustomerCare_Queries from "./pages/customerCare_Queries/CustomerCare_Queries"
import Message_Queries from "./pages/customerCare_Queries/queries_categories/Message_Queries"
import Mail_Queries from "./pages/customerCare_Queries/queries_categories/Mail_Queries"
import InApp_Calls from "./pages/customerCare_Queries/queries_categories/calls_queries/InApp_Calls"
import InProgress_Queries from "./pages/customerCare_Queries/general_Queries/InProgress_Queries"
import Escalated_Queries from "./pages/customerCare_Queries/general_Queries/Escalated_Queries" 
import Resolved_Queries from "./pages/customerCare_Queries/general_Queries/Resolved_Queries"
import Profile from "./pages/profile/CC_Profile";
import All_Users from "./pages/all_UsersDetails/all_users/All_Users"
import Personal_Info from "./pages/all_UsersDetails/personal_info/Personal_Info"
import Logged_sessions from "./pages/all_UsersDetails/logged_session/Logged_sessions"
import User_Friends from "./pages/all_UsersDetails/user_friends/User_Friends"
import Conversation from "./pages/all_UsersDetails/conversation/Conversation"
import Chat_History from "./pages/all_UsersDetails/chat_history/Chat_History"
import Game_History from "./pages/all_UsersDetails/game_history/Game_History"
import Complain_Details from "./pages/all_UsersDetails/complain_details/Complain_Details"
import ChangePassword from "./pages/signIn/ChangePassword";
import Incoming_Queries from "./pages/customerCare_Queries/incoming_queries/Incoming_Queries";




const router = createBrowserRouter([

    
    {
        path: "/",
        element: <PopupContext><MainLayout /></PopupContext> ,
        children: [

            {
                index: true,
                element: <SignIn/>
               
            },
            {
                path: "/changePassword",
                element: <ChangePassword/>
            },
            {
                path: "/dashboard",
                element: <Dashboard/>
            },
            {
                path: "/queries",
                element: <CustomerCare_Queries/>
            },
            {
                path: "/message_queries",
                element: <Message_Queries/>
            },
            {
                path: "/incomingQueries",
                element: <Incoming_Queries/>
            },
            {
                path: "/mailQueries",
                element: <Mail_Queries/>
            },
            {
                path: "/callQueries",
                element: <InApp_Calls/>
            },
            //  {
            //     path: "/resolvedQueries",
            //     element: <InProgress_Queries/>
            // },
            {
                path: "/escalatedQueries",
                element: <Escalated_Queries/>
            },
            {
                path: "/resolvedQueries",
                element: <Resolved_Queries/>
            },
            {
                path: "/queryReview/:ticketId",
                element: <Query_Review />
            },
            {
                path: "/performance",
                element: <Performance />
            },
            {
                path: "/performanceDetails",
                element: <Performance_Details />
            },
            {
                path: "/profile",
                element: <Profile/>
            },
            {
                path: "/allUsers",
                element: <All_Users/>
            },
            {
                path: "/userDetails/:phoneNumber",
                element: <Personal_Info/>
            },
            {
                path: "/loggedSessions",
                element: <Logged_sessions/>
            },
            {
                path: "/userFriends",
                element: <User_Friends/>
            },
            {
                path: "/conversations",
                element: <Conversation/>
            },
            {
                path: "/chatHistory",
                element: <Chat_History/>
            },
            {
                path: "/gameHistory",
                element: <Game_History/>
            },
            {
                path: "/complainDetails",
                element: <Complain_Details/>
            },
            // {
            //     path: "/allUsers_cc",
            //     element: <CC_All_Users/>
            // }
        ]

    },
    
])
export default router