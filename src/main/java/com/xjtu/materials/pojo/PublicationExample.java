package com.xjtu.materials.pojo;

import java.util.ArrayList;
import java.util.List;

public class PublicationExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public PublicationExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andPublicationidIsNull() {
            addCriterion("publicationID is null");
            return (Criteria) this;
        }

        public Criteria andPublicationidIsNotNull() {
            addCriterion("publicationID is not null");
            return (Criteria) this;
        }

        public Criteria andPublicationidEqualTo(String value) {
            addCriterion("publicationID =", value, "publicationid");
            return (Criteria) this;
        }

        public Criteria andPublicationidNotEqualTo(String value) {
            addCriterion("publicationID <>", value, "publicationid");
            return (Criteria) this;
        }

        public Criteria andPublicationidGreaterThan(String value) {
            addCriterion("publicationID >", value, "publicationid");
            return (Criteria) this;
        }

        public Criteria andPublicationidGreaterThanOrEqualTo(String value) {
            addCriterion("publicationID >=", value, "publicationid");
            return (Criteria) this;
        }

        public Criteria andPublicationidLessThan(String value) {
            addCriterion("publicationID <", value, "publicationid");
            return (Criteria) this;
        }

        public Criteria andPublicationidLessThanOrEqualTo(String value) {
            addCriterion("publicationID <=", value, "publicationid");
            return (Criteria) this;
        }

        public Criteria andPublicationidLike(String value) {
            addCriterion("publicationID like", value, "publicationid");
            return (Criteria) this;
        }

        public Criteria andPublicationidNotLike(String value) {
            addCriterion("publicationID not like", value, "publicationid");
            return (Criteria) this;
        }

        public Criteria andPublicationidIn(List<String> values) {
            addCriterion("publicationID in", values, "publicationid");
            return (Criteria) this;
        }

        public Criteria andPublicationidNotIn(List<String> values) {
            addCriterion("publicationID not in", values, "publicationid");
            return (Criteria) this;
        }

        public Criteria andPublicationidBetween(String value1, String value2) {
            addCriterion("publicationID between", value1, value2, "publicationid");
            return (Criteria) this;
        }

        public Criteria andPublicationidNotBetween(String value1, String value2) {
            addCriterion("publicationID not between", value1, value2, "publicationid");
            return (Criteria) this;
        }

        public Criteria andPublicationnameIsNull() {
            addCriterion("publicationName is null");
            return (Criteria) this;
        }

        public Criteria andPublicationnameIsNotNull() {
            addCriterion("publicationName is not null");
            return (Criteria) this;
        }

        public Criteria andPublicationnameEqualTo(String value) {
            addCriterion("publicationName =", value, "publicationname");
            return (Criteria) this;
        }

        public Criteria andPublicationnameNotEqualTo(String value) {
            addCriterion("publicationName <>", value, "publicationname");
            return (Criteria) this;
        }

        public Criteria andPublicationnameGreaterThan(String value) {
            addCriterion("publicationName >", value, "publicationname");
            return (Criteria) this;
        }

        public Criteria andPublicationnameGreaterThanOrEqualTo(String value) {
            addCriterion("publicationName >=", value, "publicationname");
            return (Criteria) this;
        }

        public Criteria andPublicationnameLessThan(String value) {
            addCriterion("publicationName <", value, "publicationname");
            return (Criteria) this;
        }

        public Criteria andPublicationnameLessThanOrEqualTo(String value) {
            addCriterion("publicationName <=", value, "publicationname");
            return (Criteria) this;
        }

        public Criteria andPublicationnameLike(String value) {
            addCriterion("publicationName like", value, "publicationname");
            return (Criteria) this;
        }

        public Criteria andPublicationnameNotLike(String value) {
            addCriterion("publicationName not like", value, "publicationname");
            return (Criteria) this;
        }

        public Criteria andPublicationnameIn(List<String> values) {
            addCriterion("publicationName in", values, "publicationname");
            return (Criteria) this;
        }

        public Criteria andPublicationnameNotIn(List<String> values) {
            addCriterion("publicationName not in", values, "publicationname");
            return (Criteria) this;
        }

        public Criteria andPublicationnameBetween(String value1, String value2) {
            addCriterion("publicationName between", value1, value2, "publicationname");
            return (Criteria) this;
        }

        public Criteria andPublicationnameNotBetween(String value1, String value2) {
            addCriterion("publicationName not between", value1, value2, "publicationname");
            return (Criteria) this;
        }

        public Criteria andPublicationauthorIsNull() {
            addCriterion("publicationAuthor is null");
            return (Criteria) this;
        }

        public Criteria andPublicationauthorIsNotNull() {
            addCriterion("publicationAuthor is not null");
            return (Criteria) this;
        }

        public Criteria andPublicationauthorEqualTo(String value) {
            addCriterion("publicationAuthor =", value, "publicationauthor");
            return (Criteria) this;
        }

        public Criteria andPublicationauthorNotEqualTo(String value) {
            addCriterion("publicationAuthor <>", value, "publicationauthor");
            return (Criteria) this;
        }

        public Criteria andPublicationauthorGreaterThan(String value) {
            addCriterion("publicationAuthor >", value, "publicationauthor");
            return (Criteria) this;
        }

        public Criteria andPublicationauthorGreaterThanOrEqualTo(String value) {
            addCriterion("publicationAuthor >=", value, "publicationauthor");
            return (Criteria) this;
        }

        public Criteria andPublicationauthorLessThan(String value) {
            addCriterion("publicationAuthor <", value, "publicationauthor");
            return (Criteria) this;
        }

        public Criteria andPublicationauthorLessThanOrEqualTo(String value) {
            addCriterion("publicationAuthor <=", value, "publicationauthor");
            return (Criteria) this;
        }

        public Criteria andPublicationauthorLike(String value) {
            addCriterion("publicationAuthor like", value, "publicationauthor");
            return (Criteria) this;
        }

        public Criteria andPublicationauthorNotLike(String value) {
            addCriterion("publicationAuthor not like", value, "publicationauthor");
            return (Criteria) this;
        }

        public Criteria andPublicationauthorIn(List<String> values) {
            addCriterion("publicationAuthor in", values, "publicationauthor");
            return (Criteria) this;
        }

        public Criteria andPublicationauthorNotIn(List<String> values) {
            addCriterion("publicationAuthor not in", values, "publicationauthor");
            return (Criteria) this;
        }

        public Criteria andPublicationauthorBetween(String value1, String value2) {
            addCriterion("publicationAuthor between", value1, value2, "publicationauthor");
            return (Criteria) this;
        }

        public Criteria andPublicationauthorNotBetween(String value1, String value2) {
            addCriterion("publicationAuthor not between", value1, value2, "publicationauthor");
            return (Criteria) this;
        }

        public Criteria andPublicationsummaryIsNull() {
            addCriterion("publicationSummary is null");
            return (Criteria) this;
        }

        public Criteria andPublicationsummaryIsNotNull() {
            addCriterion("publicationSummary is not null");
            return (Criteria) this;
        }

        public Criteria andPublicationsummaryEqualTo(String value) {
            addCriterion("publicationSummary =", value, "publicationsummary");
            return (Criteria) this;
        }

        public Criteria andPublicationsummaryNotEqualTo(String value) {
            addCriterion("publicationSummary <>", value, "publicationsummary");
            return (Criteria) this;
        }

        public Criteria andPublicationsummaryGreaterThan(String value) {
            addCriterion("publicationSummary >", value, "publicationsummary");
            return (Criteria) this;
        }

        public Criteria andPublicationsummaryGreaterThanOrEqualTo(String value) {
            addCriterion("publicationSummary >=", value, "publicationsummary");
            return (Criteria) this;
        }

        public Criteria andPublicationsummaryLessThan(String value) {
            addCriterion("publicationSummary <", value, "publicationsummary");
            return (Criteria) this;
        }

        public Criteria andPublicationsummaryLessThanOrEqualTo(String value) {
            addCriterion("publicationSummary <=", value, "publicationsummary");
            return (Criteria) this;
        }

        public Criteria andPublicationsummaryLike(String value) {
            addCriterion("publicationSummary like", value, "publicationsummary");
            return (Criteria) this;
        }

        public Criteria andPublicationsummaryNotLike(String value) {
            addCriterion("publicationSummary not like", value, "publicationsummary");
            return (Criteria) this;
        }

        public Criteria andPublicationsummaryIn(List<String> values) {
            addCriterion("publicationSummary in", values, "publicationsummary");
            return (Criteria) this;
        }

        public Criteria andPublicationsummaryNotIn(List<String> values) {
            addCriterion("publicationSummary not in", values, "publicationsummary");
            return (Criteria) this;
        }

        public Criteria andPublicationsummaryBetween(String value1, String value2) {
            addCriterion("publicationSummary between", value1, value2, "publicationsummary");
            return (Criteria) this;
        }

        public Criteria andPublicationsummaryNotBetween(String value1, String value2) {
            addCriterion("publicationSummary not between", value1, value2, "publicationsummary");
            return (Criteria) this;
        }

        public Criteria andPublicationtypeIsNull() {
            addCriterion("publicationType is null");
            return (Criteria) this;
        }

        public Criteria andPublicationtypeIsNotNull() {
            addCriterion("publicationType is not null");
            return (Criteria) this;
        }

        public Criteria andPublicationtypeEqualTo(String value) {
            addCriterion("publicationType =", value, "publicationtype");
            return (Criteria) this;
        }

        public Criteria andPublicationtypeNotEqualTo(String value) {
            addCriterion("publicationType <>", value, "publicationtype");
            return (Criteria) this;
        }

        public Criteria andPublicationtypeGreaterThan(String value) {
            addCriterion("publicationType >", value, "publicationtype");
            return (Criteria) this;
        }

        public Criteria andPublicationtypeGreaterThanOrEqualTo(String value) {
            addCriterion("publicationType >=", value, "publicationtype");
            return (Criteria) this;
        }

        public Criteria andPublicationtypeLessThan(String value) {
            addCriterion("publicationType <", value, "publicationtype");
            return (Criteria) this;
        }

        public Criteria andPublicationtypeLessThanOrEqualTo(String value) {
            addCriterion("publicationType <=", value, "publicationtype");
            return (Criteria) this;
        }

        public Criteria andPublicationtypeLike(String value) {
            addCriterion("publicationType like", value, "publicationtype");
            return (Criteria) this;
        }

        public Criteria andPublicationtypeNotLike(String value) {
            addCriterion("publicationType not like", value, "publicationtype");
            return (Criteria) this;
        }

        public Criteria andPublicationtypeIn(List<String> values) {
            addCriterion("publicationType in", values, "publicationtype");
            return (Criteria) this;
        }

        public Criteria andPublicationtypeNotIn(List<String> values) {
            addCriterion("publicationType not in", values, "publicationtype");
            return (Criteria) this;
        }

        public Criteria andPublicationtypeBetween(String value1, String value2) {
            addCriterion("publicationType between", value1, value2, "publicationtype");
            return (Criteria) this;
        }

        public Criteria andPublicationtypeNotBetween(String value1, String value2) {
            addCriterion("publicationType not between", value1, value2, "publicationtype");
            return (Criteria) this;
        }

        public Criteria andPublicationdoiIsNull() {
            addCriterion("publicationDOI is null");
            return (Criteria) this;
        }

        public Criteria andPublicationdoiIsNotNull() {
            addCriterion("publicationDOI is not null");
            return (Criteria) this;
        }

        public Criteria andPublicationdoiEqualTo(String value) {
            addCriterion("publicationDOI =", value, "publicationdoi");
            return (Criteria) this;
        }

        public Criteria andPublicationdoiNotEqualTo(String value) {
            addCriterion("publicationDOI <>", value, "publicationdoi");
            return (Criteria) this;
        }

        public Criteria andPublicationdoiGreaterThan(String value) {
            addCriterion("publicationDOI >", value, "publicationdoi");
            return (Criteria) this;
        }

        public Criteria andPublicationdoiGreaterThanOrEqualTo(String value) {
            addCriterion("publicationDOI >=", value, "publicationdoi");
            return (Criteria) this;
        }

        public Criteria andPublicationdoiLessThan(String value) {
            addCriterion("publicationDOI <", value, "publicationdoi");
            return (Criteria) this;
        }

        public Criteria andPublicationdoiLessThanOrEqualTo(String value) {
            addCriterion("publicationDOI <=", value, "publicationdoi");
            return (Criteria) this;
        }

        public Criteria andPublicationdoiLike(String value) {
            addCriterion("publicationDOI like", value, "publicationdoi");
            return (Criteria) this;
        }

        public Criteria andPublicationdoiNotLike(String value) {
            addCriterion("publicationDOI not like", value, "publicationdoi");
            return (Criteria) this;
        }

        public Criteria andPublicationdoiIn(List<String> values) {
            addCriterion("publicationDOI in", values, "publicationdoi");
            return (Criteria) this;
        }

        public Criteria andPublicationdoiNotIn(List<String> values) {
            addCriterion("publicationDOI not in", values, "publicationdoi");
            return (Criteria) this;
        }

        public Criteria andPublicationdoiBetween(String value1, String value2) {
            addCriterion("publicationDOI between", value1, value2, "publicationdoi");
            return (Criteria) this;
        }

        public Criteria andPublicationdoiNotBetween(String value1, String value2) {
            addCriterion("publicationDOI not between", value1, value2, "publicationdoi");
            return (Criteria) this;
        }

        public Criteria andPublicationwebsiteIsNull() {
            addCriterion("publicationWebsite is null");
            return (Criteria) this;
        }

        public Criteria andPublicationwebsiteIsNotNull() {
            addCriterion("publicationWebsite is not null");
            return (Criteria) this;
        }

        public Criteria andPublicationwebsiteEqualTo(String value) {
            addCriterion("publicationWebsite =", value, "publicationwebsite");
            return (Criteria) this;
        }

        public Criteria andPublicationwebsiteNotEqualTo(String value) {
            addCriterion("publicationWebsite <>", value, "publicationwebsite");
            return (Criteria) this;
        }

        public Criteria andPublicationwebsiteGreaterThan(String value) {
            addCriterion("publicationWebsite >", value, "publicationwebsite");
            return (Criteria) this;
        }

        public Criteria andPublicationwebsiteGreaterThanOrEqualTo(String value) {
            addCriterion("publicationWebsite >=", value, "publicationwebsite");
            return (Criteria) this;
        }

        public Criteria andPublicationwebsiteLessThan(String value) {
            addCriterion("publicationWebsite <", value, "publicationwebsite");
            return (Criteria) this;
        }

        public Criteria andPublicationwebsiteLessThanOrEqualTo(String value) {
            addCriterion("publicationWebsite <=", value, "publicationwebsite");
            return (Criteria) this;
        }

        public Criteria andPublicationwebsiteLike(String value) {
            addCriterion("publicationWebsite like", value, "publicationwebsite");
            return (Criteria) this;
        }

        public Criteria andPublicationwebsiteNotLike(String value) {
            addCriterion("publicationWebsite not like", value, "publicationwebsite");
            return (Criteria) this;
        }

        public Criteria andPublicationwebsiteIn(List<String> values) {
            addCriterion("publicationWebsite in", values, "publicationwebsite");
            return (Criteria) this;
        }

        public Criteria andPublicationwebsiteNotIn(List<String> values) {
            addCriterion("publicationWebsite not in", values, "publicationwebsite");
            return (Criteria) this;
        }

        public Criteria andPublicationwebsiteBetween(String value1, String value2) {
            addCriterion("publicationWebsite between", value1, value2, "publicationwebsite");
            return (Criteria) this;
        }

        public Criteria andPublicationwebsiteNotBetween(String value1, String value2) {
            addCriterion("publicationWebsite not between", value1, value2, "publicationwebsite");
            return (Criteria) this;
        }

        public Criteria andUsernameIsNull() {
            addCriterion("userName is null");
            return (Criteria) this;
        }

        public Criteria andUsernameIsNotNull() {
            addCriterion("userName is not null");
            return (Criteria) this;
        }

        public Criteria andUsernameEqualTo(String value) {
            addCriterion("userName =", value, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameNotEqualTo(String value) {
            addCriterion("userName <>", value, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameGreaterThan(String value) {
            addCriterion("userName >", value, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameGreaterThanOrEqualTo(String value) {
            addCriterion("userName >=", value, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameLessThan(String value) {
            addCriterion("userName <", value, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameLessThanOrEqualTo(String value) {
            addCriterion("userName <=", value, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameLike(String value) {
            addCriterion("userName like", value, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameNotLike(String value) {
            addCriterion("userName not like", value, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameIn(List<String> values) {
            addCriterion("userName in", values, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameNotIn(List<String> values) {
            addCriterion("userName not in", values, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameBetween(String value1, String value2) {
            addCriterion("userName between", value1, value2, "username");
            return (Criteria) this;
        }

        public Criteria andUsernameNotBetween(String value1, String value2) {
            addCriterion("userName not between", value1, value2, "username");
            return (Criteria) this;
        }

        public Criteria andUploadtimeIsNull() {
            addCriterion("uploadTime is null");
            return (Criteria) this;
        }

        public Criteria andUploadtimeIsNotNull() {
            addCriterion("uploadTime is not null");
            return (Criteria) this;
        }

        public Criteria andUploadtimeEqualTo(String value) {
            addCriterion("uploadTime =", value, "uploadtime");
            return (Criteria) this;
        }

        public Criteria andUploadtimeNotEqualTo(String value) {
            addCriterion("uploadTime <>", value, "uploadtime");
            return (Criteria) this;
        }

        public Criteria andUploadtimeGreaterThan(String value) {
            addCriterion("uploadTime >", value, "uploadtime");
            return (Criteria) this;
        }

        public Criteria andUploadtimeGreaterThanOrEqualTo(String value) {
            addCriterion("uploadTime >=", value, "uploadtime");
            return (Criteria) this;
        }

        public Criteria andUploadtimeLessThan(String value) {
            addCriterion("uploadTime <", value, "uploadtime");
            return (Criteria) this;
        }

        public Criteria andUploadtimeLessThanOrEqualTo(String value) {
            addCriterion("uploadTime <=", value, "uploadtime");
            return (Criteria) this;
        }

        public Criteria andUploadtimeLike(String value) {
            addCriterion("uploadTime like", value, "uploadtime");
            return (Criteria) this;
        }

        public Criteria andUploadtimeNotLike(String value) {
            addCriterion("uploadTime not like", value, "uploadtime");
            return (Criteria) this;
        }

        public Criteria andUploadtimeIn(List<String> values) {
            addCriterion("uploadTime in", values, "uploadtime");
            return (Criteria) this;
        }

        public Criteria andUploadtimeNotIn(List<String> values) {
            addCriterion("uploadTime not in", values, "uploadtime");
            return (Criteria) this;
        }

        public Criteria andUploadtimeBetween(String value1, String value2) {
            addCriterion("uploadTime between", value1, value2, "uploadtime");
            return (Criteria) this;
        }

        public Criteria andUploadtimeNotBetween(String value1, String value2) {
            addCriterion("uploadTime not between", value1, value2, "uploadtime");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedIsNull() {
            addCriterion("isAuthenticated is null");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedIsNotNull() {
            addCriterion("isAuthenticated is not null");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedEqualTo(String value) {
            addCriterion("isAuthenticated =", value, "isauthenticated");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedNotEqualTo(String value) {
            addCriterion("isAuthenticated <>", value, "isauthenticated");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedGreaterThan(String value) {
            addCriterion("isAuthenticated >", value, "isauthenticated");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedGreaterThanOrEqualTo(String value) {
            addCriterion("isAuthenticated >=", value, "isauthenticated");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedLessThan(String value) {
            addCriterion("isAuthenticated <", value, "isauthenticated");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedLessThanOrEqualTo(String value) {
            addCriterion("isAuthenticated <=", value, "isauthenticated");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedLike(String value) {
            addCriterion("isAuthenticated like", value, "isauthenticated");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedNotLike(String value) {
            addCriterion("isAuthenticated not like", value, "isauthenticated");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedIn(List<String> values) {
            addCriterion("isAuthenticated in", values, "isauthenticated");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedNotIn(List<String> values) {
            addCriterion("isAuthenticated not in", values, "isauthenticated");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedBetween(String value1, String value2) {
            addCriterion("isAuthenticated between", value1, value2, "isauthenticated");
            return (Criteria) this;
        }

        public Criteria andIsauthenticatedNotBetween(String value1, String value2) {
            addCriterion("isAuthenticated not between", value1, value2, "isauthenticated");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}