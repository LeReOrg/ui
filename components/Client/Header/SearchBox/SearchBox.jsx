import React, { useRef } from "react";
import styles from "./SearchBoxStyled";
import { makeStyles } from "@material-ui/core/styles";
import ItemTop from "../../../../assets/testSearchTop.png";
import TypeProduct from "../../../../assets/testTypePRoductSearch.png";
import { useClickOutside } from "../../../../hooks/useOnClickOutSide";
import { useCategories } from "../../../../hooks/useCategories";
import Link from "next/link";

const SearchBox = ({ changeSearBox }) => {
  const searchBoxRef = useRef();
  useCategories;
  const { data: categoryItems, isLoading } = useCategories();
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const onClickOutSide = () => {
    changeSearBox();
  };
  const renderCategoryItems = () =>
    categoryItems &&
    categoryItems.map((item, index) => (
      <Link href={`/type_product/${item._id}`} key={index}>
        <div className={classes.searchBox_topTypeProductItem}>
          <img
            className={classes.searchBox_topTypeProductItemImage}
            src={item.thumbnail.url}
          />
          <div className={classes.searchBox_topTypeProductItemText}>
            {item.name}
          </div>
        </div>
      </Link>
    ));
  useClickOutside(searchBoxRef, onClickOutSide);
  return (
    <div className={classes.searchBox_main} ref={searchBoxRef}>
      <div className={classes.searchBox_history}>
        <div className={classes.searchBox_historyContent}>
          <p className={classes.searchBox_historyTitle}>Lịch sử tìm kiếm</p>
          <p className={classes.searchBox_historyDelete}>Xóa</p>
        </div>
        <div className={classes.searchBox_historyItems}>
          <div className={classes.searchBox_historyItem}>
            <div className={classes.searchBox_historyItemIcon}></div>
            <div className={classes.searchBox_historyItemText}>
              Máy ảnh chuyên nghiệp quận 8
            </div>
          </div>
          <div className={classes.searchBox_historyItem}>
            <div className={classes.searchBox_historyItemIcon}></div>
            <div className={classes.searchBox_historyItemText}>
              Máy ảnh chuyên nghiệp quận 8
            </div>
          </div>
          <div className={classes.searchBox_historyItem}>
            <div className={classes.searchBox_historyItemIcon}></div>
            <div className={classes.searchBox_historyItemText}>
              Máy ảnh chuyên nghiệp quận 8
            </div>
          </div>
        </div>
      </div>
      <hr className={classes.searchBox_mainHr} />
      <div className={classes.searchBox_top}>
        <div className={classes.searchBox_topContent}>
          <div className={classes.searchBox_topIcon}></div>
          <div className={classes.searchBox_topTitle}>Tìm Kiếm Phổ Biến</div>
        </div>
        <div className={classes.searchBox_topItems}>
          <div className={classes.searchBox_topItem}>
            <img className={classes.searchBox_topItemImage} src={ItemTop} />
            <div className={classes.searchBox_topItemText}>Lều cắm trại</div>
          </div>
          <div className={classes.searchBox_topItem}>
            <img className={classes.searchBox_topItemImage} src={ItemTop} />
            <div className={classes.searchBox_topItemText}>Lều cắm trại</div>
          </div>
          <div className={classes.searchBox_topItem}>
            <img className={classes.searchBox_topItemImage} src={ItemTop} />
            <div className={classes.searchBox_topItemText}>Lều cắm trại</div>
          </div>
          <div className={classes.searchBox_topItem}>
            <img className={classes.searchBox_topItemImage} src={ItemTop} />
            <div className={classes.searchBox_topItemText}>Lều cắm trại</div>
          </div>
          <div className={classes.searchBox_topItem}>
            <img className={classes.searchBox_topItemImage} src={ItemTop} />
            <div className={classes.searchBox_topItemText}>Lều cắm trại</div>
          </div>
          <div className={classes.searchBox_topItem}>
            <img className={classes.searchBox_topItemImage} src={ItemTop} />
            <div className={classes.searchBox_topItemText}>Lều cắm trại</div>
          </div>
        </div>
      </div>
      <hr className={classes.searchBox_mainHr} />
      <div className={classes.searchBox_topTypeProduct}>
        <div className={classes.searchBox_topTypeProductTitle}>
          Danh Mục Nổi Bật
        </div>
        <div className={classes.searchBox_topTypeProductItems}>
          {renderCategoryItems()}
        </div>
      </div>
    </div>
  );
};
export default SearchBox;
