export interface GradeType{
    GType: string;
}

export interface Grade{
    GradeId: number;
    GradeName: string;
    GradeType: string;
    GradeTypes?: GradeType;
}