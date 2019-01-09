/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.github.adminfaces.starter.bean;

import com.github.adminfaces.starter.model.ReportData;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;

/**
 *
 * @author Htet Nanda Kyaw
 */
@ManagedBean(name = "reportBean")
public class ReportBBean implements Serializable {

    private static final long serialVersionUID = 1L;
    private List<ReportData> reportDatas;
    private List<String> company;
    private boolean panu_render;
    private boolean island_render;
    private boolean alliance_render;
    private boolean ytl_render;
    private boolean samwoh_render;
    private boolean simix_render;
    private boolean footer_render;

    @PostConstruct
    public void init() {
        panu_render = true;
        island_render = true;
        alliance_render = false;
        ytl_render = false;
        samwoh_render = false;
        simix_render = false;
        footer_render = false;
        company = new ArrayList<String>();
        company.add("PAN UNITED");
        company.add("ISLAND");
        reportDatas = new ArrayList<ReportData>();
        ReportData reportData = new ReportData();
        reportData.setTitle("No. of Plant");
        reportData.setJan("29");
        reportData.setFeb("30");
        reportData.setMar("29");
        reportData.setApr("30");
        reportData.setMay("31");
        reportData.setJun("32");
        reportData.setJul("33");
        reportData.setAug("33");
        reportData.setSept("33");
        reportData.setOct("33");
        reportData.setNov("33");
        reportData.setDec("33");
        reportDatas.add(reportData);

        reportData = new ReportData();
        reportData.setTitle("No. of Truck");
        reportData.setJan("417");
        reportData.setFeb("420");
        reportData.setMar("420");
        reportData.setApr("419");
        reportData.setMay("341");
        reportData.setJun("325");
        reportData.setJul("333");
        reportData.setAug("313");
        reportData.setSept("567");
        reportData.setOct("234");
        reportData.setNov("68");
        reportData.setDec("987");
        reportDatas.add(reportData);

        reportData = new ReportData();
        reportData.setTitle("Truck Capacity (mᶟ)");
        reportData.setJan("4173");
        reportData.setFeb("4520");
        reportData.setMar("7420");
        reportData.setApr("4419");
        reportData.setMay("9341");
        reportData.setJun("3225");
        reportData.setJul("3133");
        reportData.setAug("3135");
        reportData.setSept("5617");
        reportData.setOct("3234");
        reportData.setNov("1368");
        reportData.setDec("3145");
        reportDatas.add(reportData);

        reportData = new ReportData();
        reportData.setTitle("Volume per month (mᶟ)");
        reportData.setJan("3173");
        reportData.setFeb("6520");
        reportData.setMar("8420");
        reportData.setApr("9419");
        reportData.setMay("1341");
        reportData.setJun("4225");
        reportData.setJul("6133");
        reportData.setAug("8135");
        reportData.setSept("2717");
        reportData.setOct("2334");
        reportData.setNov("9368");
        reportData.setDec("1445");
        reportDatas.add(reportData);

    }

    public void companySelect() {
        if (!company.isEmpty()) {
            panu_render = false;
            island_render = false;
            alliance_render = false;
            ytl_render = false;
            samwoh_render = false;
            simix_render = false;
            footer_render = false;
            for (int i = 0; i < company.size(); i++) {
                if (company.get(i).equals("PAN UNITED")) {
                    panu_render = true;
                    footer_render = true;
                }
                if (company.get(i).equals("ISLAND")) {
                    island_render = true;
                    footer_render = true;
                }
                if (company.get(i).equals("ALLIANCE")) {
                    alliance_render = true;
                    footer_render = true;
                }
                if (company.get(i).equals("YTL")) {
                    ytl_render = true;
                    footer_render = true;
                }
                if (company.get(i).equals("SAMWOH")) {
                    samwoh_render = true;
                    footer_render = true;
                }
                if (company.get(i).equals("SIMIX")) {
                    simix_render = true;
                    footer_render = true;
                }
            }
        }
    }

    public List<ReportData> getReportDatas() {
        return reportDatas;
    }

    public void setReportDatas(List<ReportData> reportDatas) {
        this.reportDatas = reportDatas;
    }

    public List<String> getCompany() {
        return company;
    }

    public void setCompany(List<String> company) {
        this.company = company;
    }

    public boolean isPanu_render() {
        return panu_render;
    }

    public void setPanu_render(boolean panu_render) {
        this.panu_render = panu_render;
    }

    public boolean isIsland_render() {
        return island_render;
    }

    public void setIsland_render(boolean island_render) {
        this.island_render = island_render;
    }

    public boolean isAlliance_render() {
        return alliance_render;
    }

    public void setAlliance_render(boolean alliance_render) {
        this.alliance_render = alliance_render;
    }

    public boolean isYtl_render() {
        return ytl_render;
    }

    public void setYtl_render(boolean ytl_render) {
        this.ytl_render = ytl_render;
    }

    public boolean isSamwoh_render() {
        return samwoh_render;
    }

    public void setSamwoh_render(boolean samwoh_render) {
        this.samwoh_render = samwoh_render;
    }

    public boolean isSimix_render() {
        return simix_render;
    }

    public void setSimix_render(boolean simix_render) {
        this.simix_render = simix_render;
    }

    public boolean isFooter_render() {
        return footer_render;
    }

    public void setFooter_render(boolean footer_render) {
        this.footer_render = footer_render;
    }
    
}
