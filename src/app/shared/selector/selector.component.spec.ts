import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorComponent } from './selector.component';

describe('SelectorComponent', () => {
  let component: SelectorComponent;
  let fixture: ComponentFixture<SelectorComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('search bar', () => {
    it('should have a search bar', () => {
      const searchBar = nativeElement.querySelector('input.search-bar');
      expect(searchBar).toBeTruthy();
      
    })
  });

  describe('search button', () => {
    it('should have a fetch button', () => {
      const fetchButton = nativeElement.querySelector('button.fetch-button');
      expect(fetchButton).toBeTruthy();
    })
  })

  describe('select all button', () => {
    it('should have a select all button', () => {
      const selectAllButton = nativeElement.querySelector('button.select-all-button');
      expect(selectAllButton).toBeTruthy();
    })
  })
});
