import React, { FC, ReactNode, useEffect, useState } from "react"
import RCPagination from "rc-pagination"
import { Link } from "gatsby"

interface Props {
  path: string
  blogPath: string
  totalCount: number
  pageInfo: {
    perPage: number
  }
}

const Pagination: FC<Props> = ({ totalCount, pageInfo, path, blogPath }) => {
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    const currentPath = path.replace(/\D+/g, "")
    if (currentPath === "") {
      setCurrentPage(1)
    } else {
      setCurrentPage(+currentPath)
    }
  }, [])
  const onChange = (page: number) => {
    setCurrentPage(page)
  }
  const itemRender = (current: ReactNode, type: string, element: ReactNode) => {
    if (type === "page") {
      if (current === 1 || current === 0) {
        return <Link to={`${blogPath}`}>{current}</Link>
      }
      return <Link to={`${blogPath}${current}`}>{current}</Link>
    }
    if (type === "prev") {
      if (current === 1 || current === 0) {
        return <Link to={`${blogPath}`}>{"<"}</Link>
      }
      return <Link to={`${blogPath}${current}`}>{"<"}</Link>
    }
    if (type === "next") {
      return <Link to={`${blogPath}${current}`}>{">"}</Link>
    }
    if (type === "jump-next") {
      return <Link to={`${blogPath}${current}`}>...</Link>
    }
    if (type === "jump-prev") {
      if (current === 1 || current === 0) {
        return <Link to={`${blogPath}`}>...</Link>
      }
      return <Link to={`${blogPath}${current}`}>...</Link>
    }
    return element
  }
  return (
    <RCPagination
      className="flex"
      showTitle={false}
      total={totalCount}
      pageSize={pageInfo.perPage}
      current={currentPage}
      onChange={onChange}
      itemRender={itemRender}
    />
  )
}

export default Pagination
