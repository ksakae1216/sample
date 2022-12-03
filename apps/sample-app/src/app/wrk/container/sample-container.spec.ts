import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { SampleComponent } from "../component/sample.component";
import { SampleContainerComponent } from "./sample-container"

describe('SampleContainerComponent', () => {
  let container: SampleContainerComponent;
  let fixture: ComponentFixture<SampleContainerComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [SampleContainerComponent, SampleComponent],
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleContainerComponent);
    container = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should call SampleContainerComponent.submitAction()', () => {
    jest.spyOn(container, 'submitAction');

    // 子Componentのemit
    (fixture.debugElement.query(By.directive(SampleComponent)).componentInstance as SampleComponent).submitAction.emit();

    // 親Containerのmethodがcallされてるかテスト
    expect(container.submitAction).toHaveBeenCalledWith();
  })
})
