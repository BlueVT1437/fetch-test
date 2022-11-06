import { BgCoinBalance, ChevRonLeft } from "../../../../assets/images";
import ProgressBar from "../../../../assets/progress-bar";

import { CoinBalanceStyle } from "./coinbalance.style";

const CoinBalance = () => {
  return (
    <CoinBalanceStyle>
      <div className="relative coin-bg d-flex relative">
        <div className="absolute w-100 h-100">
          <BgCoinBalance />
        </div>
        <div className="coin-content p-24 w-100 z-10">
          <div className="coin-title">
            <span className="font-semibold">Available Coin balance</span>
          </div>
          <div className="coin-amount pt-8">
            <span>340</span>
          </div>
          <div className="py-34">
            <ProgressBar />
          </div>
          <div className="coin-content">
            <span>
              You have paid rental fee for $1,200. Pay more $800 to achieve Gold
              Tier.
            </span>
          </div>
          <div className="coin-view d-flex">
            <span>View tier benefits</span>
            <div>
              <ChevRonLeft />
            </div>
          </div>
          <div className="coin-button d-flex">
            <button>
              <span className="text-white">My Coupons</span>
            </button>
          </div>
          <div className="coin-time_update text-center">
            <span>Updated : 02/11/2021</span>
          </div>
        </div>
      </div>
    </CoinBalanceStyle>
  );
};

export default CoinBalance;
