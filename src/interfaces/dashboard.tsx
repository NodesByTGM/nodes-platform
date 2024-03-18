/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IDashboardContext {
    pageName: string;
    accountType: string;
    setAccountType: (e) => void;
    user: any;
  }