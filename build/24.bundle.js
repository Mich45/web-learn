(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{192:function(t,e,i){"use strict";i.r(e);var a=i(23),l=i(70),s=i(69),r={components:{VideoList:function(){return Promise.all([i.e(1),i.e(2),i.e(25)]).then(i.bind(null,175))}},props:{topic:Object},data:function(){return{videos:[],limit:6}},created:function(){this.loadVideos()},watch:{$route:"loadVideos"},methods:{loadVideos:function(){var t=this,e={q:l.a.prepareQuery(this.topic),order:s.a.order[3].value,maxResults:this.limit};a.a.fetchVideos(e).then(function(e){t.videos=e.videos})}}},n=i(4),o=Object(n.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.topic&&t.videos.length?i("section",{staticClass:"section is-paddingless"},[i("hr"),i("div",{staticClass:"container"},[i("strong",[t._v("More from "),i("router-link",{attrs:{to:{name:"topic",params:{id:t.topic.id}}}},[t._v(t._s(t.topic.title))])],1),i("div",{staticClass:"has-margintop"},[i("video-list",{attrs:{videos:t.videos,columns:t.limit}})],1)])]):t._e()},[],!1,null,null,null);e.default=o.exports},69:function(t,e,i){"use strict";var a=i(68),l=i.n(a),s=[{title:"All Time",value:""},{title:"Today",value:l()().subtract(1,"days").toISOString()},{title:"This Week",value:l()().subtract(7,"days").toISOString()},{title:"This Month",value:l()().subtract(30,"days").toISOString()},{title:"This Year",value:l()().subtract(365,"days").toISOString()}];e.a={order:[{title:"By views",value:"viewCount",field:"viewCount"},{title:"By rating",value:"rating",field:"rating"},{title:"By date",value:"date",field:"publishedAt"},{title:"By relevance",value:"relevance",field:"viewCount"}],language:[{title:"Czech",value:"cs"},{title:"English",value:"en"},{title:"French",value:"fr"},{title:"Hebrew",value:"he"},{title:"Polish",value:"pl"},{title:"Portuguese",value:"pt"},{title:"Russian",value:"ru"}],timeframe:s}},70:function(t,e,i){"use strict";var a=i(63),l=i.n(a);e.a={prepareQuery:function(t){var e="";t.constructor===Array?e=(e=l()(t,"title").join("|")).replace(/\./g,""):t.constructor===Object&&(e=t.title);return"$1".replace(/\$1/,e)}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0cy9Ub3BpY1JlbGF0ZWRWaWRlb3MudnVlPzEzY2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dpZGdldHMvVG9waWNSZWxhdGVkVmlkZW9zLnZ1ZT8yMTFlIiwid2VicGFjazovLy9zcmMvd2lkZ2V0cy9Ub3BpY1JlbGF0ZWRWaWRlb3MudnVlIiwid2VicGFjazovLy8uL3NyYy93aWRnZXRzL1RvcGljUmVsYXRlZFZpZGVvcy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9maWx0ZXJzL29yZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGkvZmlsdGVycy90aW1lZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9maWx0ZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9hcGkvZmlsdGVycy9sYW5ndWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwiVmlkZW9MaXN0IiwicHJvcHMiLCJ0b3BpYyIsIk9iamVjdCIsImRhdGEiLCJ2aWRlb3MiLCJsaW1pdCIsImNyZWF0ZWQiLCJ0aGlzIiwibG9hZFZpZGVvcyIsIndhdGNoIiwibWV0aG9kcyIsInEiLCJ1dGlsIiwib3JkZXIiLCJmaWx0ZXJzIiwibWF4UmVzdWx0cyIsInN0b3JlIiwiY29tcG9uZW50IiwiX3ZtIiwiX2giLCIkY3JlYXRlRWxlbWVudCIsIl9jIiwiX3NlbGYiLCJsZW5ndGgiLCJzdGF0aWNDbGFzcyIsIl92IiwiYXR0cnMiLCJuYW1lIiwicGFyYW1zIiwiaWQiLCJfcyIsInRpdGxlIiwiX2UiLCJ2YWx1ZSIsIm1vbWVudCIsInN1YnRyYWN0IiwidG9JU09TdHJpbmciLCJmaWVsZCIsImxhbmd1YWdlIiwidGltZWZyYW1lIiwicHJlcGFyZVF1ZXJ5IiwidG9waWNzIiwicXVlcnkiLCJjb25zdHJ1Y3RvciIsIkFycmF5IiwibWFwIiwiam9pbiIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiJrR0FBQSxJLHdCQ0FrTSxFQ2VsTSxDQUNFQSxXQUFZLENBQ1ZDLFVBSkosZ0ZBTUVDLE1BQU8sQ0FDTEMsTUFBT0MsUUFFVEMsS0FQRixXQVFJLE1BQU8sQ0FDTEMsT0FBUSxHQUNSQyxNQUFPLElBR1hDLFFBYkYsV0FjSUMsS0FBS0MsY0FFUEMsTUFBTyxDQUNMLE9BQVUsY0FFWkMsUUFBUyxDQUNQRixXQURKLFdBQ0EsV0FDQSxHQUNRRyxFQUFHQyxFQUFYLDJCQUNRQyxNQUFPQyxFQUFmLGlCQUNRQyxXQUFZUixLQUFLRixPQUduQlcsRUFBTixrQ0FDUSxFQUFSLHFCLE9DcENJQyxFQUFZLFlBQ2QsRUhSVyxXQUFhLElBQUlDLEVBQUlYLEtBQVNZLEVBQUdELEVBQUlFLGVBQW1CQyxFQUFHSCxFQUFJSSxNQUFNRCxJQUFJRixFQUFHLE9BQVFELEVBQUlqQixPQUFTaUIsRUFBSWQsT0FBT21CLE9BQVFGLEVBQUcsVUFBVSxDQUFDRyxZQUFZLDBCQUEwQixDQUFDSCxFQUFHLE1BQU1BLEVBQUcsTUFBTSxDQUFDRyxZQUFZLGFBQWEsQ0FBQ0gsRUFBRyxTQUFTLENBQUNILEVBQUlPLEdBQUcsY0FBY0osRUFBRyxjQUFjLENBQUNLLE1BQU0sQ0FBQyxHQUFLLENBQUVDLEtBQU0sUUFBU0MsT0FBUSxDQUFFQyxHQUFJWCxFQUFJakIsTUFBTTRCLE9BQVMsQ0FBQ1gsRUFBSU8sR0FBR1AsRUFBSVksR0FBR1osRUFBSWpCLE1BQU04QixXQUFXLEdBQUdWLEVBQUcsTUFBTSxDQUFDRyxZQUFZLGlCQUFpQixDQUFDSCxFQUFHLGFBQWEsQ0FBQ0ssTUFBTSxDQUFDLE9BQVNSLEVBQUlkLE9BQU8sUUFBVWMsRUFBSWIsVUFBVSxPQUFPYSxFQUFJYyxNQUM3ZCxJR1VwQixFQUNBLEtBQ0EsS0FDQSxNQUlhLFVBQUFmLEUseUNDbEJBLEksaUJDRUEsR0FDYixDQUNFYyxNQUFPLFdBQ1BFLE1BQU8sSUFFVCxDQUNFRixNQUFPLFFBQ1BFLE1BQU9DLE1BQVNDLFNBQVMsRUFBRyxRQUFRQyxlQUV0QyxDQUNFTCxNQUFPLFlBQ1BFLE1BQU9DLE1BQVNDLFNBQVMsRUFBRyxRQUFRQyxlQUV0QyxDQUNFTCxNQUFPLGFBQ1BFLE1BQU9DLE1BQVNDLFNBQVMsR0FBSSxRQUFRQyxlQUV2QyxDQUNFTCxNQUFPLFlBQ1BFLE1BQU9DLE1BQVNDLFNBQVMsSUFBSyxRQUFRQyxnQkNqQjNCLEtBQ2J2QixNRkxhLENBQ2IsQ0FBRWtCLE1BQU8sV0FBWUUsTUFBTyxZQUFhSSxNQUFPLGFBQ2hELENBQUVOLE1BQU8sWUFBYUUsTUFBTyxTQUFVSSxNQUFPLFVBQzlDLENBQUVOLE1BQU8sVUFBV0UsTUFBTyxPQUFRSSxNQUFPLGVBQzFDLENBQUVOLE1BQU8sZUFBZ0JFLE1BQU8sWUFBYUksTUFBTyxjRUVwREMsU0NOYSxDQUNiLENBQ0VQLE1BQU8sUUFDUEUsTUFBTyxNQUVULENBQ0VGLE1BQU8sVUFDUEUsTUFBTyxNQUVULENBQ0VGLE1BQU8sU0FDUEUsTUFBTyxNQUVULENBQ0VGLE1BQU8sU0FDUEUsTUFBTyxNQUVULENBQ0VGLE1BQU8sU0FDUEUsTUFBTyxNQUVULENBQ0VGLE1BQU8sYUFDUEUsTUFBTyxNQUVULENBQ0VGLE1BQU8sVUFDUEUsTUFBTyxPRHBCVE0sYyxnQ0VQRixxQkFFZSxLQUNiQyxhQURhLFNBQ0FDLEdBQ1gsSUFBSUMsRUFBUSxHQUVURCxFQUFPRSxjQUFnQkMsTUFNeEJGLEdBRkFBLEVBRm9CRyxJQUFJSixFQUFRLFNBRVpLLEtBQUssTUFFWEMsUUFBUSxNQUFPLElBR3JCTixFQUFPRSxjQUFnQnpDLFNBQy9Cd0MsRUFBUUQsRUFBT1YsT0FHakIsTUFBTyxLQUFLZ0IsUUFBUSxNQUFPTCIsImZpbGUiOiIyNC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiAoX3ZtLnRvcGljICYmIF92bS52aWRlb3MubGVuZ3RoKT9fYygnc2VjdGlvbicse3N0YXRpY0NsYXNzOlwic2VjdGlvbiBpcy1wYWRkaW5nbGVzc1wifSxbX2MoJ2hyJyksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY29udGFpbmVyXCJ9LFtfYygnc3Ryb25nJyxbX3ZtLl92KFwiTW9yZSBmcm9tIFwiKSxfYygncm91dGVyLWxpbmsnLHthdHRyczp7XCJ0b1wiOnsgbmFtZTogJ3RvcGljJywgcGFyYW1zOiB7IGlkOiBfdm0udG9waWMuaWQgfSB9fX0sW192bS5fdihfdm0uX3MoX3ZtLnRvcGljLnRpdGxlKSldKV0sMSksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiaGFzLW1hcmdpbnRvcFwifSxbX2MoJ3ZpZGVvLWxpc3QnLHthdHRyczp7XCJ2aWRlb3NcIjpfdm0udmlkZW9zLFwiY29sdW1uc1wiOl92bS5saW1pdH19KV0sMSldKV0pOl92bS5fZSgpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVG9waWNSZWxhdGVkVmlkZW9zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RvcGljUmVsYXRlZFZpZGVvcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGUgbGFuZz1cInB1Z1wiPlxuc2VjdGlvbi5zZWN0aW9uLmlzLXBhZGRpbmdsZXNzKHYtaWY9XCJ0b3BpYyAmJiB2aWRlb3MubGVuZ3RoXCIpXG4gIGhyXG4gIC5jb250YWluZXJcbiAgICBzdHJvbmcgTW9yZSBmcm9tICNbcm91dGVyLWxpbmsoOnRvPVwieyBuYW1lOiAndG9waWMnLCBwYXJhbXM6IHsgaWQ6IHRvcGljLmlkIH0gfVwiKSB7eyB0b3BpYy50aXRsZSB9fV1cbiAgICAuaGFzLW1hcmdpbnRvcFxuICAgICAgdmlkZW8tbGlzdCg6dmlkZW9zPVwidmlkZW9zXCIsOmNvbHVtbnM9XCJsaW1pdFwiKVxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBzdG9yZSBmcm9tICd+c3RvcmUnXG5pbXBvcnQgdXRpbCBmcm9tICd+dXRpbCdcbmltcG9ydCBmaWx0ZXJzIGZyb20gJ35hcGkvZmlsdGVycydcbmNvbnN0IFZpZGVvTGlzdCA9ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInZpZGVvLWxpc3RcIiAqLyAnfmNvbXBvbmVudHMvVmlkZW9MaXN0LnZ1ZScpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIFZpZGVvTGlzdFxuICB9LFxuICBwcm9wczoge1xuICAgIHRvcGljOiBPYmplY3RcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmlkZW9zOiBbXSxcbiAgICAgIGxpbWl0OiA2XG4gICAgfVxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMubG9hZFZpZGVvcygpXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgJyRyb3V0ZSc6ICdsb2FkVmlkZW9zJ1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbG9hZFZpZGVvcygpIHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgcTogdXRpbC5wcmVwYXJlUXVlcnkodGhpcy50b3BpYyksXG4gICAgICAgIG9yZGVyOiBmaWx0ZXJzLm9yZGVyWzNdLnZhbHVlLFxuICAgICAgICBtYXhSZXN1bHRzOiB0aGlzLmxpbWl0XG4gICAgICB9XG5cbiAgICAgIHN0b3JlLmZldGNoVmlkZW9zKHBhcmFtcykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICB0aGlzLnZpZGVvcyA9IHJlc3VsdC52aWRlb3NcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RvcGljUmVsYXRlZFZpZGVvcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmI3ZjQ0MjUmbGFuZz1wdWcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVG9waWNSZWxhdGVkVmlkZW9zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVG9waWNSZWxhdGVkVmlkZW9zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0IGRlZmF1bHQgW1xuICB7IHRpdGxlOiAnQnkgdmlld3MnLCB2YWx1ZTogJ3ZpZXdDb3VudCcsIGZpZWxkOiAndmlld0NvdW50JyB9LFxuICB7IHRpdGxlOiAnQnkgcmF0aW5nJywgdmFsdWU6ICdyYXRpbmcnLCBmaWVsZDogJ3JhdGluZycgfSxcbiAgeyB0aXRsZTogJ0J5IGRhdGUnLCB2YWx1ZTogJ2RhdGUnLCBmaWVsZDogJ3B1Ymxpc2hlZEF0JyB9LFxuICB7IHRpdGxlOiAnQnkgcmVsZXZhbmNlJywgdmFsdWU6ICdyZWxldmFuY2UnLCBmaWVsZDogJ3ZpZXdDb3VudCcgfVxuXVxuIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIHRpdGxlOiAnQWxsIFRpbWUnLFxuICAgIHZhbHVlOiAnJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdUb2RheScsXG4gICAgdmFsdWU6IG1vbWVudCgpLnN1YnRyYWN0KDEsICdkYXlzJykudG9JU09TdHJpbmcoKVxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdUaGlzIFdlZWsnLFxuICAgIHZhbHVlOiBtb21lbnQoKS5zdWJ0cmFjdCg3LCAnZGF5cycpLnRvSVNPU3RyaW5nKClcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVGhpcyBNb250aCcsXG4gICAgdmFsdWU6IG1vbWVudCgpLnN1YnRyYWN0KDMwLCAnZGF5cycpLnRvSVNPU3RyaW5nKClcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVGhpcyBZZWFyJyxcbiAgICB2YWx1ZTogbW9tZW50KCkuc3VidHJhY3QoMzY1LCAnZGF5cycpLnRvSVNPU3RyaW5nKClcbiAgfVxuXVxuIiwiaW1wb3J0IG9yZGVyIGZyb20gJy4vb3JkZXInXG5pbXBvcnQgbGFuZ3VhZ2UgZnJvbSAnLi9sYW5ndWFnZSdcbmltcG9ydCB0aW1lZnJhbWUgZnJvbSAnLi90aW1lZnJhbWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb3JkZXIsXG4gIGxhbmd1YWdlLFxuICB0aW1lZnJhbWVcbn1cbiIsImV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIHRpdGxlOiAnQ3plY2gnLFxuICAgIHZhbHVlOiAnY3MnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0VuZ2xpc2gnLFxuICAgIHZhbHVlOiAnZW4nXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0ZyZW5jaCcsXG4gICAgdmFsdWU6ICdmcidcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnSGVicmV3JyxcbiAgICB2YWx1ZTogJ2hlJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdQb2xpc2gnLFxuICAgIHZhbHVlOiAncGwnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1BvcnR1Z3Vlc2UnLFxuICAgIHZhbHVlOiAncHQnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1J1c3NpYW4nLFxuICAgIHZhbHVlOiAncnUnXG4gIH1cbl1cbiIsImltcG9ydCBtYXAgZnJvbSAnbG9kYXNoLm1hcCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcmVwYXJlUXVlcnkodG9waWNzKSB7XG4gICAgbGV0IHF1ZXJ5ID0gJydcblxuICAgIGlmKHRvcGljcy5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgIC8vIGdldCBhbGwgdG9waWMgdGl0bGVzXG4gICAgICBjb25zdCB0b3BpY1RpdGxlcyA9IG1hcCh0b3BpY3MsICd0aXRsZScpXG4gICAgICAvLyB0cmFuc2Zvcm0gYXJyYXkgb2YgdG9waWNzIHRvIHBpcGUgc3RyaW5nXG4gICAgICBxdWVyeSA9IHRvcGljVGl0bGVzLmpvaW4oJ3wnKVxuICAgICAgLy8gcmVtb3ZlIGFsbCBkb3RzXG4gICAgICBxdWVyeSA9IHF1ZXJ5LnJlcGxhY2UoL1xcLi9nLCAnJylcbiAgICAgIC8vIHJlbW92ZSBhbGwgc3BhY2VzXG4gICAgICAvLyBxdWVyeSA9IHF1ZXJ5LnJlcGxhY2UoL1xccy9nLCAnJylcbiAgICB9IGVsc2UgaWYodG9waWNzLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgIHF1ZXJ5ID0gdG9waWNzLnRpdGxlXG4gICAgfVxuXG4gICAgcmV0dXJuICckMScucmVwbGFjZSgvXFwkMS8sIHF1ZXJ5KVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9