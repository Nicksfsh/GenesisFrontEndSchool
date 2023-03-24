import {useState, useEffect} from "react";
import Courseinfo from "./Courseinfo";
import Pagination from "./Pagination";

const itemsPerPage = 10
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzMjUxY2Y1OS05NGMxLTRiN2UtOWI4Yy00NDc4ZTQyOTAzNWUiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2NzkyNDIwOTYsImV4cCI6MTY4MDE0MjA5Nn0.AFN29weYV_ti-8IFWA2b467T--tIPgOkx48-gEJTpBg"


const AllCourses = () => {
    const [allCourses, setAllCourses] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const lastItemIndex = currentPage * itemsPerPage
    const firstItemIndex = lastItemIndex - itemsPerPage
    const currentItems = allCourses.slice(firstItemIndex, lastItemIndex)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const nextPage = (pageNumbers) => {
        if (currentPage < pageNumbers.length)
            setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if (currentPage > 1)
            setCurrentPage(currentPage - 1)
    }

    useEffect(() => {
        fetch('https://api.wisey.app/api/v1/core/preview-courses/', {
            headers: {"Authorization": `Bearer  ${token}`}
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setAllCourses(data.courses)
            });
    }, []);

    return (

        <div>
            {currentItems.length > 0 &&
            <Pagination
                currentPage={currentPage}
                items={allCourses.length}
                itemsPerPage={itemsPerPage}
                paginate={paginate}
                nextPage={nextPage}
                prevPage={prevPage}
            />
            }

            {currentItems.map((item) => <Courseinfo key={item.id} courseId={item.id} rating={item.rating}
                                                    tags={item.tags}
                                                    previewImageLink={item.previewImageLink + '/cover.webp'}
                                                    title={item.title} description={item.description}
                                                    lessonsCount={item.lessonsCount}/>
            )

            }

            {currentItems.length > 0 &&
            <Pagination
                currentPage={currentPage}
                items={allCourses.length}
                itemsPerPage={itemsPerPage}
                paginate={paginate}
                nextPage={nextPage}
                prevPage={prevPage}
            />
            }

        </div>
    )
}

export default AllCourses