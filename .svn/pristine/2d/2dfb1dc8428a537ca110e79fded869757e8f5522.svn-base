package com.github.adminfaces.starter.bean;



import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ManagedBean;
import javax.faces.context.FacesContext;
import org.primefaces.event.SelectEvent;

@ManagedBean(name ="comeptitorEntryForm")
public class CompetitorEntryForm
  implements Serializable
{
  /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
private List<CompetitorEntryData> competitorData;
  private List<CompetitorEntryData> selectedCompetitorData;
  private Date date;
  private String realdate;
  private boolean showlabel;
  private boolean copyflag = false;
  
  public void startDateFilter(SelectEvent event)
  {
    FacesContext facesContext = FacesContext.getCurrentInstance();
    this.date = ((Date)event.getObject());
    this.showlabel = false;
    facesContext.addMessage(null, new FacesMessage(FacesMessage.SEVERITY_INFO, "Date Selected", this.date.toString()));
  }
  
  String hahadate = "trolol";
  
  public void clickmefunction()
  {
      
  }
  
  public String getHahadate()
  {
    return this.hahadate;
  }
  
  public void setHahadate(String hahadate)
  {
    this.hahadate = hahadate;
  }
  
  public boolean isShowlabel()
  {
    return this.showlabel;
  }
  
  public void setShowlabel(boolean showlabel)
  {
    this.showlabel = showlabel;
  }
  
  @PostConstruct
  public void init()
  {
    this.showlabel = true;
    this.competitorData = new ArrayList<CompetitorEntryData>();
    CompetitorEntryData competdata = new CompetitorEntryData();
    competdata.setId(1);
    competdata.setBatching_plant_location("Thomson");
    competdata.setNo_of_batching(1);
    competdata.setZone("");
    competdata.setNo_of_truck(20);
    competdata.setPlant_capacity(100);
    competdata.setVolume_per_month(2000);
    competdata.setIs_hdb_approved(true);
    competdata.setTot_detail("");
    competdata.setSupported_by("");
    competdata.setCapabilities("");
    competdata.setMap_location("");
    this.competitorData.add(competdata);
    
    competdata = new CompetitorEntryData();
    competdata.setId(2);
    competdata.setBatching_plant_location("East Cost");
    competdata.setNo_of_batching(2);
    competdata.setZone("");
    competdata.setNo_of_truck(30);
    competdata.setPlant_capacity(200);
    competdata.setVolume_per_month(3000);
    competdata.setIs_hdb_approved(false);
    competdata.setTot_detail("");
    competdata.setSupported_by("");
    competdata.setCapabilities("");
    competdata.setMap_location("");
    this.competitorData.add(competdata);
    
    competdata = new CompetitorEntryData();
    competdata.setId(3);
    competdata.setBatching_plant_location("Marina View");
    competdata.setNo_of_batching(3);
    competdata.setZone("");
    competdata.setNo_of_truck(40);
    competdata.setPlant_capacity(300);
    competdata.setVolume_per_month(4000);
    competdata.setIs_hdb_approved(true);
    competdata.setTot_detail("");
    competdata.setSupported_by("");
    competdata.setCapabilities("");
    competdata.setMap_location("");
    this.competitorData.add(competdata);
  }
  
  public int gettotalnobatching()
  {
    int totalnoofbatch = 0;
    for (CompetitorEntryData competitorData1 : this.competitorData) {
      totalnoofbatch += competitorData1.getNo_of_batching();
    }
    return totalnoofbatch;
  }
  
  public List<CompetitorEntryData> getCompetitorData()
  {
    return this.competitorData;
  }
  
  public void setCompetitorData(List<CompetitorEntryData> competitorData)
  {
    this.competitorData = competitorData;
  }
  
  public List<CompetitorEntryData> getSelectedCompetitorData()
  {
    return this.selectedCompetitorData;
  }
  
  public void setSelectedCompetitorData(List<CompetitorEntryData> selectedCompetitorData)
  {
    this.selectedCompetitorData = selectedCompetitorData;
  }
  
  public Date getDate()
  {
    return this.date;
  }
  
  public void setDate(Date date)
  {
    this.date = date;
  }
  
  public String getRealdate()
  {
    return this.realdate;
  }
  
  public void setRealdate(String realdate)
  {
    this.realdate = realdate;
  }
  
  public boolean isCopyflag()
  {
    return this.copyflag;
  }
  
  public void setCopyflag(boolean copyflag)
  {
    this.copyflag = copyflag;
  }
}
