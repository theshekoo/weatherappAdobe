// This shows a different way of testing a component, check about for a simpler one
import { Component } from '@angular/core';

import { TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';

describe('Weather Component', () => {
  const html = '<weather></weather>';

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [WeatherComponent, TestComponent]});
    TestBed.overrideComponent(TestComponent, { set: { template: html }});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Weather Works!');
  });

});

@Component({selector: 'my-test', template: ''})
class TestComponent { }
