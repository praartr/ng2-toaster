Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
// app
const helpers_1 = require("./helpers");
const services_1 = require("./services");
exports.BASE_PROVIDERS = [
    ...services_1.PROVIDERS,
];
let CoreModule = CoreModule_1 = class CoreModule {
    constructor(parentModule) {
        helpers_1.throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
    static forRoot(configuredProviders) {
        return {
            ngModule: CoreModule_1,
            providers: [
                ...exports.BASE_PROVIDERS,
                ...configuredProviders
            ],
        };
    }
};
CoreModule = CoreModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);
exports.CoreModule = CoreModule;
var CoreModule_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsd0NBQWtGO0FBQ2xGLDRDQUErQztBQUUvQyxNQUFNO0FBQ04sdUNBQWlEO0FBQ2pELHlDQUF1QztBQUUxQixRQUFBLGNBQWMsR0FBVTtJQUNuQyxHQUFHLG9CQUFTO0NBQ2IsQ0FBQztBQUtGLElBQWEsVUFBVSxrQkFBdkI7SUFXRSxZQUFvQyxZQUF3QjtRQUMxRCw4QkFBb0IsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQVpELE1BQU0sQ0FBQyxPQUFPLENBQUMsbUJBQStCO1FBQzVDLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRyxZQUFVO1lBQ3JCLFNBQVMsRUFBRztnQkFDVixHQUFHLHNCQUFjO2dCQUNqQixHQUFHLG1CQUFtQjthQUN2QjtTQUNGLENBQUM7SUFDSixDQUFDO0NBS0YsQ0FBQTtBQWRZLFVBQVU7SUFIdEIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztLQUN4QixDQUFDO0lBWWEsV0FBQSxlQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsZUFBUSxFQUFFLENBQUE7cUNBQWUsVUFBVTtHQVhqRCxVQUFVLENBY3RCO0FBZFksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vLyBhcHBcbmltcG9ydCB7IHRocm93SWZBbHJlYWR5TG9hZGVkIH0gZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IFBST1ZJREVSUyB9IGZyb20gJy4vc2VydmljZXMnO1xuXG5leHBvcnQgY29uc3QgQkFTRV9QUk9WSURFUlM6IGFueVtdID0gW1xuICAuLi5QUk9WSURFUlMsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZ3VyZWRQcm92aWRlcnM6IEFycmF5PGFueT4pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGUgOiBDb3JlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzIDogW1xuICAgICAgICAuLi5CQVNFX1BST1ZJREVSUyxcbiAgICAgICAgLi4uY29uZmlndXJlZFByb3ZpZGVyc1xuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb3JlTW9kdWxlKSB7XG4gICAgdGhyb3dJZkFscmVhZHlMb2FkZWQocGFyZW50TW9kdWxlLCAnQ29yZU1vZHVsZScpO1xuICB9XG59XG4iXX0=