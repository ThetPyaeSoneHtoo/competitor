/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.github.adminfaces.starter.bean;

import com.github.adminfaces.starter.model.LegalIssueData;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;

/**
 *
 * @author TPSHtoo
 */
@ManagedBean(name = "companyFormMB")
public class CompanyFormMB {
    
    private List<LegalIssueData> legalIssueList= new ArrayList<LegalIssueData>();
    private LegalIssueData legalIssueData = new LegalIssueData();

    public CompanyFormMB() {
    }
    @PostConstruct
    public void init() {
        System.out.print(">>>>>>>>>>>>>>I was here");
        this.legalIssueList = new ArrayList<LegalIssueData>();
        this.legalIssueData = new LegalIssueData();
        this.legalIssueData.setCompanyName("some company name");
        this.legalIssueData.setCourtType("some court type");
        this.legalIssueData.setYearOfLodge("some year of lodge");
        this.legalIssueList.add(legalIssueData);
    }
    public void removeLegalIssue(LegalIssueData legalIssue){
        this.legalIssueList.remove(legalIssue);
    }
    public void addNewRow(){
        this.legalIssueData = new LegalIssueData();
        this.legalIssueData.setCompanyName("some company name");
        this.legalIssueData.setCourtType("some court type");
        this.legalIssueData.setYearOfLodge("some year of lodge");
        this.legalIssueList.add(legalIssueData);
    }
    
    public List<LegalIssueData> getLegalIssueList() {
        return this.legalIssueList;
    }

    public void setLegalIssueList(List<LegalIssueData> legalIssueList) {
        this.legalIssueList = legalIssueList;
    }

}
