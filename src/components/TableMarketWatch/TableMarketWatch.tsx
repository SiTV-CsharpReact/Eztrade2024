
import TradingViewWidget from '../chartTradingView/TradingView';
import { Modal, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/configStore';
import { setStatusTradingView } from '../chartTradingView/tradingViewSlice';
import { LineChartGradient } from '../chartIndex/LineChartGradient';
import SearchStockCode from '../Header/component/SearchStockCode';
import TablePrice from '../tablePrice/TablePrice';

const TableMarketWatch = () => {
  const dispatch = useAppDispatch()
 
const {Exchange,statusTradingView,stockCode} = useAppSelector((state=> state.chartTradingView));
 const handleClose = () =>  dispatch(setStatusTradingView({ statusTradingView: false }));

  return (
    <section className='w-full h-[701px] bg-[#1A1D1F]'>

      <div className='price-board_header h-[35px] bg-[#272B30]'>
      <div className="price-board-header px-2 flex">
  <div className="w-48 xl:w-56">
    <div
      className="form-control stock-search-control price-board-search-stock"
      role="combobox"
      aria-expanded="false"
      aria-haspopup="listbox"
      aria-labelledby="downshift-0-label"
    >
      <div className="input-group group flex pt-1">
      
        <SearchStockCode index="left"/>
      </div>
    </div>
  </div>
  <ul
    className="price-board-menu-overflow price-board-menu price-board-menu-root price-board-menu-horizontal mr-4 flex"
    role="menu"
    tabIndex={0}
    data-menu-list="true"
  >
    <li
      className="price-board-menu-overflow-item price-board-menu-submenu price-board-menu-submenu-horizontal flex"
      role="none"
      style={{ opacity: 1, order: 0 }}
    >
      <div
        role="menuitem"
        className="price-board-menu-submenu-title"
        tabIndex={-1}
        aria-expanded="false"
        aria-haspopup="true"
        data-menu-id="rc-menu-uuid-88314-2-watchList"
        aria-controls="rc-menu-uuid-88314-2-watchList-popup"
      >
        <span>Danh mục của tôi</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={48}
            d="M112 184l144 144 144-144"
          />
        </svg>
        <i className="price-board-menu-submenu-arrow" />
      </div>
    </li>
    <li
      className="price-board-menu-overflow-item price-board-menu-submenu price-board-menu-submenu-horizontal price-board-menu-submenu-selected"
      role="none"
      style={{ opacity: 1, order: 1 }}
    >
      <div
        role="menuitem"
        className="price-board-menu-submenu-title"
        tabIndex={-1}
        data-menu-id="rc-menu-uuid-88314-2-vn30"
        aria-expanded="false"
        aria-haspopup="true"
        aria-controls="rc-menu-uuid-88314-2-vn30-popup"
      >
        <span>VN30</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={48}
            d="M112 184l144 144 144-144"
          />
        </svg>
        <i className="price-board-menu-submenu-arrow" />
      </div>
    </li>
    <li
      className="price-board-menu-overflow-item price-board-menu-item"
      role="menuitem"
      tabIndex={-1}
      style={{ opacity: 1, order: 2 }}
      data-menu-id="rc-menu-uuid-88314-2-hnx30"
    >
      <a href="/?nav=eyJrZXkiOiJobngzMCIsImRhdGEiOnsidHlwZSI6Imdyb3VwIiwiZ3JvdXAiOiJobngzMCIsInRhYmxlVHlwZSI6ImVxdWl0aWVzIn19">
        HNX30
      </a>
    </li>
    <li
      className="price-board-menu-overflow-item price-board-menu-item"
      role="menuitem"
      tabIndex={-1}
      style={{ opacity: 1, order: 3 }}
      data-menu-id="rc-menu-uuid-88314-2-hose"
    >
      <a href="/?nav=eyJrZXkiOiJob3NlIiwiZGF0YSI6eyJ0eXBlIjoiZXhjaGFuZ2UiLCJleGNoYW5nZSI6Imhvc2UiLCJ0YWJsZVR5cGUiOiJlcXVpdGllcyJ9fQ">
        HOSE
      </a>
    </li>
    <li
      className="price-board-menu-overflow-item price-board-menu-submenu price-board-menu-submenu-horizontal"
      role="none"
      style={{ opacity: 1, order: 4 }}
    >
      <div
        role="menuitem"
        className="price-board-menu-submenu-title"
        tabIndex={-1}
        data-menu-id="rc-menu-uuid-88314-2-hnx"
        aria-expanded="false"
        aria-haspopup="true"
        aria-controls="rc-menu-uuid-88314-2-hnx-popup"
      >
        <span>HNX</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={48}
            d="M112 184l144 144 144-144"
          />
        </svg>
        <i className="price-board-menu-submenu-arrow" />
      </div>
    </li>
    <li
      className="price-board-menu-overflow-item price-board-menu-item"
      role="menuitem"
      tabIndex={-1}
      style={{ opacity: 1, order: 5 }}
      data-menu-id="rc-menu-uuid-88314-2-upcom"
    >
      <a href="/?nav=eyJrZXkiOiJ1cGNvbSIsImRhdGEiOnsidHlwZSI6ImV4Y2hhbmdlIiwiZXhjaGFuZ2UiOiJ1cGNvbSIsInRhYmxlVHlwZSI6ImVxdWl0aWVzIn19">
        UPCOM
      </a>
    </li>
    <li
      className="price-board-menu-overflow-item price-board-menu-item"
      role="menuitem"
      tabIndex={-1}
      style={{ opacity: 1, order: 6 }}
      data-menu-id="rc-menu-uuid-88314-2-corporateBond"
    >
      <a href="/?nav=eyJrZXkiOiJjb3Jwb3JhdGVCb25kIiwiZGF0YSI6eyJ0eXBlIjoiY29ycG9yYXRlQm9uZCIsInRhYmxlVHlwZSI6ImNvcnBvcmF0ZUJvbmQifX0">
        Trái phiếu riêng lẻ
      </a>
    </li>
    <li
      className="price-board-menu-overflow-item price-board-menu-submenu price-board-menu-submenu-horizontal"
      role="none"
      style={{ opacity: 1, order: 7 }}
    >
      <div
        role="menuitem"
        className="price-board-menu-submenu-title"
        tabIndex={-1}
        data-menu-id="rc-menu-uuid-88314-2-sectors"
        aria-expanded="false"
        aria-haspopup="true"
        aria-controls="rc-menu-uuid-88314-2-sectors-popup"
      >
        <span>CP Ngành</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={48}
            d="M112 184l144 144 144-144"
          />
        </svg>
        <i className="price-board-menu-submenu-arrow" />
      </div>
    </li>
    <li
      className="price-board-menu-overflow-item price-board-menu-submenu price-board-menu-submenu-horizontal"
      role="none"
      style={{ opacity: 1, order: 8 }}
    >
      <div
        role="menuitem"
        className="price-board-menu-submenu-title"
        tabIndex={-1}
        data-menu-id="rc-menu-uuid-88314-2-deal"
        aria-expanded="false"
        aria-haspopup="true"
        aria-controls="rc-menu-uuid-88314-2-deal-popup"
      >
        <span>Thỏa thuận</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={48}
            d="M112 184l144 144 144-144"
          />
        </svg>
        <i className="price-board-menu-submenu-arrow" />
      </div>
    </li>
    <li
      className="price-board-menu-overflow-item price-board-menu-submenu price-board-menu-submenu-horizontal"
      role="none"
      style={{ opacity: 1, order: 9 }}
    >
      <div
        role="menuitem"
        className="price-board-menu-submenu-title"
        tabIndex={-1}
        data-menu-id="rc-menu-uuid-88314-2-derivatives"
        aria-expanded="false"
        aria-haspopup="true"
        aria-controls="rc-menu-uuid-88314-2-derivatives-popup"
      >
        <span>Phái sinh</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={48}
            d="M112 184l144 144 144-144"
          />
        </svg>
        <i className="price-board-menu-submenu-arrow" />
      </div>
    </li>
    <li
      className="price-board-menu-overflow-item price-board-menu-submenu price-board-menu-submenu-horizontal"
      role="none"
      style={{ opacity: 1, order: 10 }}
    >
      <div
        role="menuitem"
        className="price-board-menu-submenu-title"
        tabIndex={-1}
        data-menu-id="rc-menu-uuid-88314-2-coveredWarrants"
        aria-expanded="false"
        aria-haspopup="true"
        aria-controls="rc-menu-uuid-88314-2-coveredWarrants-popup"
      >
        <span>Chứng quyền</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={48}
            d="M112 184l144 144 144-144"
          />
        </svg>
        <i className="price-board-menu-submenu-arrow" />
      </div>
    </li>
    <li
      className="price-board-menu-overflow-item price-board-menu-item"
      role="menuitem"
      tabIndex={-1}
      style={{ opacity: 1, order: 11 }}
      data-menu-id="rc-menu-uuid-88314-2-etf"
    >
      <a href="/?nav=eyJrZXkiOiJldGYiLCJkYXRhIjp7InR5cGUiOiJzdG9ja1R5cGUiLCJzdG9ja1R5cGUiOiJlIiwiZXhjaGFuZ2UiOiJob3NlIiwidGFibGVUeXBlIjoiZXF1aXRpZXMifX0">
        ETF
      </a>
    </li>
    <li
      className="price-board-menu-overflow-item price-board-menu-submenu price-board-menu-submenu-horizontal"
      role="none"
      style={{ opacity: 1, order: 12 }}
    >
      <div
        role="menuitem"
        className="price-board-menu-submenu-title"
        tabIndex={-1}
        data-menu-id="rc-menu-uuid-88314-2-oddLot"
        aria-expanded="false"
        aria-haspopup="true"
        aria-controls="rc-menu-uuid-88314-2-oddLot-popup"
      >
        <span>Lô lẻ</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={48}
            d="M112 184l144 144 144-144"
          />
        </svg>
        <i className="price-board-menu-submenu-arrow" />
      </div>
    </li>
    <li
      className="price-board-menu-overflow-item price-board-menu-overflow-item-rest price-board-menu-submenu price-board-menu-submenu-horizontal price-board-menu-submenu-disabled"
      aria-hidden="true"
      role="none"
      style={{
        opacity: 0,
        height: 0,
        overflowY: "hidden",
        order: 2147483647,
        pointerEvents: "none",
        position: "absolute"
      }}
    >
      <div
        role="menuitem"
        className="price-board-menu-submenu-title"
        title="..."
        aria-expanded="false"
        aria-haspopup="true"
        data-menu-id="rc-menu-uuid-88314-2-rc-menu-more"
        aria-controls="rc-menu-uuid-88314-2-rc-menu-more-popup"
        aria-disabled="true"
      >
        ...
        <i className="price-board-menu-submenu-arrow" />
      </div>
    </li>
  </ul>
  <div aria-hidden="true" style={{ display: "none" }}>
    <div
      className="scrollbar-container max-w-xl menu-watch-list ps"
      style={{ minWidth: 320, maxHeight: "calc(-0.25rem + 100vh)" }}
    >
      <div className="flex items-center justify-between relative group">
        <div className=" flex-none group-hover:flex pr-3 absolute inset-y-0 right-0 text-xs text-color-primary hidden">
          <div className="flex-1 flex items-center px-1 cursor-pointer hover:text-color-highlight">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z" />
            </svg>
          </div>
          <div className="flex-1 flex items-center px-1 cursor-pointer hover:text-color-highlight">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between relative group">
        <div className=" flex-none group-hover:flex pr-3 absolute inset-y-0 right-0 text-xs text-color-primary hidden">
          <div className="flex-1 flex items-center px-1 cursor-pointer hover:text-color-highlight">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z" />
            </svg>
          </div>
          <div className="flex-1 flex items-center px-1 cursor-pointer hover:text-color-highlight">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between relative group">
        <div className=" flex-none group-hover:flex pr-3 absolute inset-y-0 right-0 text-xs text-color-primary hidden">
          <div className="flex-1 flex items-center px-1 cursor-pointer hover:text-color-highlight">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z" />
            </svg>
          </div>
          <div className="flex-1 flex items-center px-1 cursor-pointer hover:text-color-highlight">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
            </svg>
          </div>
        </div>
      </div>
      <form className="add-watch-list-form flex items-start space-x-2 p-2">
        <div className="flex-1">
          <div className="form-control">
            <div className="input-group">
              <input
                name="name"
                type="text"
                className="input-control"
                placeholder="Tạo danh mục mới"
                maxLength={50}
                autoComplete="off"
                defaultValue=""
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="flex-none rounded flex items-center justify-center h-8 w-8 hover:bg-highlight hover:text-color-highlight focus:outline-none focus:text-color-highlight focus:bg-highlight"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            className="text-xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M256 112v288m144-144H112"
            />
          </svg>
        </button>
      </form>
      <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
        <div
          className="ps__thumb-x"
          tabIndex={0}
          style={{ left: 0, width: 0 }}
        />
      </div>
      <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
        <div
          className="ps__thumb-y"
          tabIndex={0}
          style={{ top: 0, height: 0 }}
        />
      </div>
    </div>
    <div
      className="scrollbar-container max-w-xl price-board-menu-2col ps"
      style={{ width: 320, maxHeight: "calc(-0.25rem + 100vh)" }}
    >
      <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
        <div
          className="ps__thumb-x"
          tabIndex={0}
          style={{ left: 0, width: 0 }}
        />
      </div>
      <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
        <div
          className="ps__thumb-y"
          tabIndex={0}
          style={{ top: 0, height: 0 }}
        />
      </div>
    </div>
    <div
      className="scrollbar-container max-w-xl ps"
      style={{ minWidth: 98, maxHeight: "calc(-0.25rem + 100vh)" }}
    >
      <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
        <div
          className="ps__thumb-x"
          tabIndex={0}
          style={{ left: 0, width: 0 }}
        />
      </div>
      <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
        <div
          className="ps__thumb-y"
          tabIndex={0}
          style={{ top: 0, height: 0 }}
        />
      </div>
    </div>
    <div
      className="scrollbar-container max-w-xl price-board-menu-2col ps"
      style={{ width: 420, maxHeight: "calc(-0.25rem + 100vh)" }}
    >
      <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
        <div
          className="ps__thumb-x"
          tabIndex={0}
          style={{ left: 0, width: 0 }}
        />
      </div>
      <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
        <div
          className="ps__thumb-y"
          tabIndex={0}
          style={{ top: 0, height: 0 }}
        />
      </div>
    </div>
    <div
      className="scrollbar-container max-w-xl ps"
      style={{ minWidth: 98, maxHeight: "calc(-0.25rem + 100vh)" }}
    >
      <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
        <div
          className="ps__thumb-x"
          tabIndex={0}
          style={{ left: 0, width: 0 }}
        />
      </div>
      <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
        <div
          className="ps__thumb-y"
          tabIndex={0}
          style={{ top: 0, height: 0 }}
        />
      </div>
    </div>
    <div
      className="scrollbar-container max-w-xl ps"
      style={{ minWidth: 98, maxHeight: "calc(-0.25rem + 100vh)" }}
    >
      <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
        <div
          className="ps__thumb-x"
          tabIndex={0}
          style={{ left: 0, width: 0 }}
        />
      </div>
      <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
        <div
          className="ps__thumb-y"
          tabIndex={0}
          style={{ top: 0, height: 0 }}
        />
      </div>
    </div>
    <form
      autoComplete="off"
      className="sub-menu form-filter-cw px-3 pt-1.5 pb-3"
    >
      <div className="flex space-x-2 mb-2">
        <div className="w-1/2">
          <label className="mb-1">CK cơ sở</label>
          <div
            className="form-control stock-search-control"
            role="combobox"
            aria-expanded="false"
            aria-haspopup="listbox"
            aria-labelledby="downshift-1-label"
          >
            <div className="input-group group">
              <div className="icon left-icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className="text-sm"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                  </g>
                </svg>
              </div>
              <input
                className="input-control"
                placeholder="Nhập mã CK"
                aria-autocomplete="list"
                aria-labelledby="downshift-1-label"
                autoComplete="off"
                id="downshift-1-input"
                defaultValue=""
              />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <label className="mb-1">Tổ chức phát hành</label>
          <div className="form-control input-issuer">
            <div className="input-group">
              <input
                name="issuer"
                type="text"
                className="input-control"
                placeholder="Nhập TCPH"
                maxLength={255}
                autoComplete="off"
                defaultValue=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-2 items-end">
        <div className="flex-1">
          <label className="mb-1">GDCC</label>
          <div className="flex space-x-2">
            <div className="form-control">
              <div className="relative">
                <div className="react-datepicker-wrapper">
                  <div className="react-datepicker__input-container">
                    <input
                      type="text"
                      id="fromDate"
                      name="fromDate"
                      placeholder="Từ ngày"
                      autoComplete="off"
                      className="p-2 leading-4 block w-full border border-input-border rounded bg-input-background outline-none text-13"
                      tabIndex={-1}
                      defaultValue=""
                    />
                  </div>
                </div>
                <label htmlFor="fromDate">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    className="absolute top-0 right-0 mr-3 w-3 h-full cursor-pointer"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z" />
                  </svg>
                </label>
              </div>
            </div>
            <div className="form-control">
              <div className="relative">
                <div className="react-datepicker-wrapper">
                  <div className="react-datepicker__input-container">
                    <input
                      type="text"
                      id="toDate"
                      name="toDate"
                      placeholder="Đến ngày"
                      autoComplete="off"
                      className="p-2 leading-4 block w-full border border-input-border rounded bg-input-background outline-none text-13"
                      tabIndex={-1}
                      defaultValue=""
                    />
                  </div>
                </div>
                <label htmlFor="toDate">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    className="absolute top-0 right-0 mr-3 w-3 h-full cursor-pointer"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z" />
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-none w-20">
          <button
            type="button"
            className="btn button-control medium filter-none w-full bg-neutral hover:bg-invert text-13"
            tabIndex={-1}
          >
            Bỏ lọc
          </button>
        </div>
      </div>
    </form>
    <div
      className="scrollbar-container max-w-xl ps"
      style={{ minWidth: 98, maxHeight: "calc(-0.25rem + 100vh)" }}
    >
      <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
        <div
          className="ps__thumb-x"
          tabIndex={0}
          style={{ left: 0, width: 0 }}
        />
      </div>
      <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
        <div
          className="ps__thumb-y"
          tabIndex={0}
          style={{ top: 0, height: 0 }}
        />
      </div>
    </div>
  </div>
  <div className="flex space-x-2">
    <button
      type="button"
      className="inline-flex items-center justify-center text-color-primary hover:text-color-highlight"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M2.859 2.877l12.57-1.795a.5.5 0 0 1 .571.495v20.846a.5.5 0 0 1-.57.495L2.858 21.123a1 1 0 0 1-.859-.99V3.867a1 1 0 0 1 .859-.99zM4 4.735v14.53l10 1.429V3.306L4 4.735zM17 19h3V5h-3V3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4v-2zm-6.8-7l2.8 4h-2.4L9 13.714 7.4 16H5l2.8-4L5 8h2.4L9 10.286 10.6 8H13l-2.8 4z" />
        </g>
      </svg>
    </button>
    <div className="relative" data-headlessui-state="">
      <button
        className="h-full outline-none px-0.5 hover:text-color-highlight"
        id="headlessui-popover-button-8"
        type="button"
        aria-expanded="false"
        data-headlessui-state=""
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 512 512"
          className="text-sm outline-none"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256 176a80 80 0 1080 80 80.24 80.24 0 00-80-80zm172.72 80a165.53 165.53 0 01-1.64 22.34l48.69 38.12a11.59 11.59 0 012.63 14.78l-46.06 79.52a11.64 11.64 0 01-14.14 4.93l-57.25-23a176.56 176.56 0 01-38.82 22.67l-8.56 60.78a11.93 11.93 0 01-11.51 9.86h-92.12a12 12 0 01-11.51-9.53l-8.56-60.78A169.3 169.3 0 01151.05 393L93.8 416a11.64 11.64 0 01-14.14-4.92L33.6 331.57a11.59 11.59 0 012.63-14.78l48.69-38.12A174.58 174.58 0 0183.28 256a165.53 165.53 0 011.64-22.34l-48.69-38.12a11.59 11.59 0 01-2.63-14.78l46.06-79.52a11.64 11.64 0 0114.14-4.93l57.25 23a176.56 176.56 0 0138.82-22.67l8.56-60.78A11.93 11.93 0 01209.94 26h92.12a12 12 0 0111.51 9.53l8.56 60.78A169.3 169.3 0 01361 119l57.2-23a11.64 11.64 0 0114.14 4.92l46.06 79.52a11.59 11.59 0 01-2.63 14.78l-48.69 38.12a174.58 174.58 0 011.64 22.66z" />
        </svg>
      </button>
    </div>
    <button
      type="button"
      className="inline-flex items-center justify-center text-color-primary hover:text-color-highlight"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx={256} cy={256} r={48} />
        <circle cx={256} cy={416} r={48} />
        <circle cx={256} cy={96} r={48} />
      </svg>
    </button>
    <button
      type="button"
      className="btn button-control small bg-buy text-xs font-medium w-20 xl:w-28"
      tabIndex={-1}
    >
      Đặt lệnh
    </button>
  </div>
</div>

      </div>
      <div className='price-board_table'>
      {/* <LineChartGradient/> */}
      </div>
      <TablePrice/>
      {/* <SearchStockCode/> */}
    
  <Modal

  open={statusTradingView}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box  sx={{
    position: 'absolute',
    top: "50%",
    left: "50%",
    transform: 'translate(-50%, -50%)'
  }}>
    <div>Mã CK</div>
<TradingViewWidget heightPriceBoard={500} Exchange={Exchange} stockCode={stockCode}/>
  </Box>

</Modal>
  
    </section>
  )
}

export default TableMarketWatch