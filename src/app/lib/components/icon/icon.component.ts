import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { IconService } from '../../../services/icon.service';
import { SafeHtmlPipe } from '../../../pipes/safe-html.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  imports: [SafeHtmlPipe, CommonModule],
})

export class IconComponent implements AfterViewInit, OnChanges {
  @Input() iconName: string = '';
  @Input() fillColor: string = 'currentColor';
  @Input() size: number = 16;
  iconSvg: string = '';
  private observer: MutationObserver | null = null;

  constructor(
    private iconService: IconService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }


  ngAfterViewInit(): void {
    if (this.iconName) {
      this.iconService.getIcon(this.iconName).subscribe(svg => {
        if (svg) {
          this.iconSvg = svg;
          this.observeSvgChanges(); // Observa cuando el SVG esté en el DOM
        } else {
          console.error('SVG not found in library for icon:', this.iconName);
        }
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fillColor'] && !changes['fillColor'].firstChange) {
      this.applyFillColor(); // Aplica el nuevo color si cambia `fillColor`
    }
  }

  private observeSvgChanges(): void {
    // Crea un observer para detectar cambios en el DOM
    this.observer = new MutationObserver(() => {
      const svgElement = this.elementRef.nativeElement.querySelector('svg');
      if (svgElement) {
        this.applyFillColor(); // Aplica el color una vez que el SVG está disponible
        this.observer?.disconnect(); // Detén la observación
      }
    });

    // Comienza a observar cambios en el DOM del componente
    this.observer.observe(this.elementRef.nativeElement, { childList: true, subtree: true });
  }

  private applyFillColor(): void {
    const svgElement = this.elementRef.nativeElement.querySelector('svg');
    if (svgElement) {
      this.renderer.setAttribute(svgElement, 'fill', this.fillColor);
    }
    // console.log(svgElement)
  }

  ngOnDestroy(): void {
    this.observer?.disconnect(); // Limpieza del observer
  }

}
