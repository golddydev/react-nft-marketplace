import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Divider from "../components/divider/Divider";
import RankingData from "../data/ranking/ranking-data.json";
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const RankingTable = () => {
    const columns = [
        {
            dataField: 'id',
            text: 'Position',
        },
        {
            dataField: 'title',
            text: 'Title',
            sort: true
        },
        {
            dataField: 'price',
            text: 'Base Price'
        },
        {
            dataField: 'last1day',
            text: 'Last 1 Day',
            sort: true
        },
        {
            dataField: 'weeks',
            text: '7 Days'
        }
    ];

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 10,
        paginationSize: 5,
        disablePageTitle: true,
        hideSizePerPage: true
    });

    return(
        <>
            <Header />
            
            <Breadcrumb 
                breadcrumbTitle="Ranking" 
                breadcrumbNav={[
                    {
                        navText: "Home",
                        path: "/"
                    }
                ]}
            />

            <Divider />

            <div className="activity-wrapper">
                {/* Ranking Table */}
                <div className="container">
                    <div className="ranking-table">
                        <BootstrapTable 
                            keyField="id" 
                            data={RankingData} 
                            columns={columns} 
                            pagination={pagination} 
                            bootstrap4
                        />
                    </div>
                </div>
            </div>
            
            <Divider />

            <Footer />
        </>
    )
}

export default RankingTable;