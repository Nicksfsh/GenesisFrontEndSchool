const Pagination = (props) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(props.items / props.itemsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
            <ul className='pagination'>
                < li className="page-item">
                    <a href="#" onClick={() => props.prevPage()}>
                        {"<"}
                    </a>
                </li>
                {
                    pageNumbers.map((number, index) => (
                        < li className={number === props.currentPage ? "selected" : ''} key={number}>
                            <a href="#" onClick={() => props.paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
                < li className="page-item">
                    <a href="#" onClick={() => props.nextPage(pageNumbers)}>
                        {">"}
                    </a>
                </li>
            </ul>
        </div>
    )

}

export default Pagination