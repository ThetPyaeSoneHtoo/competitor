/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.github.adminfaces.starter.model;

/**
 *
 * @author TPSHtoo
 */
public class LegalIssueData {
    private String companyName;
    private String yearOfLodge;
    private String courtType;

    public LegalIssueData() {
    }

    public LegalIssueData(String companyName, String yearOfLodge, String courtType) {
        this.companyName = companyName;
        this.yearOfLodge = yearOfLodge;
        this.courtType = courtType;
    }

    public String getCompanyName() {
        return this.companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getYearOfLodge() {
        return this.yearOfLodge;
    }

    public void setYearOfLodge(String yearOfLodge) {
        this.yearOfLodge = yearOfLodge;
    }

    public String getCourtType() {
        return this.courtType;
    }

    public void setCourtType(String courtType) {
        this.courtType = courtType;
    }
    
}
