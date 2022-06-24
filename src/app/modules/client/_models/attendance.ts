export interface Attendance {
    id: number;
    workHourId: number;
    tDate: Date;
    tDateOut: Date;
    inTime: string;
    inMode: string;
    inRemarks: string;
    outTime: string;
    outMode: string;
    outRemarks: string;
    lunchIn: string;
    lunchInMode: string;
    lunchInRemarks: string;
    lunchOut: string;
    lunchOutMode: string;
    lunchOutRemarks: string;
    tiffinIn: string;
    tiffinInMode: string;
}