import '../styles/Home.css';
import Header from '../components/Header';
import ListUser from '../components/ListUser';

function Home(){
    return(
        <div>
            <div className="content">
            <ListUser></ListUser>
            </div>
        </div>
    );
};
export default Home;