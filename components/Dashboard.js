const Dashboard = () => {
    return (  

        <>
        
    <div className="flex flex-col w-64 h-screen py-8 bg-blue-50 border-r dark:bg-gray-800 dark:border-gray-600">
        <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white">PAIZANA</h2>

        <div className="flex flex-col items-center mt-6 -mx-2">
            <img className="object-cover w-24 h-24 mx-2 rounded-full" src="https://scontent.flad2-1.fna.fbcdn.net/v/t1.6435-9/143020946_5063125337094458_7788124473043789950_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_eui2=AeF7KG_AlU_k9uLsJwCudRWNg-wlhg3CegaD7CWGDcJ6BsVkJqWEko7xf28znPkNVLC-0HYMpFaK0O1xnETThMkP&_nc_ohc=YAkDRC2jRNoAX-5lYDW&tn=pwm0pNt6u7gqDE61&_nc_ht=scontent.flad2-1.fna&oh=0aee7fbcd95ce99787ed06ee781205ee&oe=6147C120" alt="avatar" />
            <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">Kip Faceless</h4>
            <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">kipfaceless@gmail.com</p>
        </div>
        
        <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
                <a className="flex items-center px-4 py-2 text-gray-200 bg-gray-900 dark:bg-gray-700 dark:text-gray-200" >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <span className="mx-4 font-medium">Dashboard</span>
                </a>

                <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-200" >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>

                    <span className="mx-4 font-medium">Products</span>
                </a>

                <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-200" >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>

                    <span className="mx-4 font-medium">Users</span>
                </a>

                <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform dark:text-gray-400 hover:bg-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-200" >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <span className="mx-4 font-medium">Settings</span>
                </a>
            </nav>
        </div>
    </div>
        </>
    );
}
 
export default Dashboard;